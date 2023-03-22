import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "../../data";

interface Customer {
  name: string;
  email: string;
  city: string;
  phone: string;
  street: string;
  zipcode: number;
}
interface Order {
  products: CartItem[];
  totalPrice: number;
  customer: Customer;
}

interface OrderContextValue {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
  // updateOrder: (products: Product[]) => void;
  price: (totalPrice: number) => void;
  total: number;
}

export const OrderContext = createContext<OrderContextValue>(null as any);
export const useOrder = () => useContext(OrderContext);

interface Props {
  children: ReactNode;
}

export default function OrderProvider({ children }: Props) {
  const [order, setOrder] = useState<Order>({
    products: [],
    totalPrice: 0,
    customer: {
      name: "",
      email: "",
      city: "",
      phone: "",
      street: "",
      zipcode: 0,
    },
  });
  const [total, setTotal] = useState(0);

  const price = (totalPrice: number) => {
    setTotal(totalPrice);
  };

  // const updateOrder = (products: CartItem[]) => {
  //   const totalPrice = products.reduce(
  //     (acc, product) => acc + product.price,
  //     0
  //   );
  //   setOrder({ products, totalPrice, customer: order.customer });
  // };

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        price,
        total,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
