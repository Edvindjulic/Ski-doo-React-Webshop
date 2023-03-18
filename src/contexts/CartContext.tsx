import { createContext, ReactNode, useContext, useState } from "react";
import { Product, products } from "../../data";

interface ContextValue {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (product: Product) => void;
  // removeProduct: (product: Product) => void;
}

export const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

export default function ShoppingCart({ children }: Props) {
  const [cart, setCart] = useState<Product[]>(products);

  const addProduct = (anything: Product) => {
    setCart([...cart, anything]);
  };
  const removeProduct = (product: Product) => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
