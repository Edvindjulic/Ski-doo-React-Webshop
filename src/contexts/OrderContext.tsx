import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../../data";

interface Order {
  products: Product[];
  totalPrice: number;
}

interface OrderContextValue {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
  updateOrder: (products: Product[]) => void;
}

export const OrderContext = createContext<OrderContextValue>(null as any);
export const useOrder = () => useContext(OrderContext);

interface Props {
  children: ReactNode;
}

export default function OrderProvider({ children }: Props) {
  const [order, setOrder] = useState<Order>({ products: [], totalPrice: 0 });

  const updateOrder = (products: Product[]) => {
    const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
    setOrder({ products, totalPrice });
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        updateOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}