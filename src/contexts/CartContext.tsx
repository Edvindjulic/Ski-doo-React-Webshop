import { createContext, ReactNode, useContext, useState } from "react";
import { Product, products } from "../../data";

interface ContextValue {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

export default function ShoppingCart({ children }: Props) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
