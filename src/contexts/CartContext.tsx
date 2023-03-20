import { createContext, ReactNode, useContext, useState } from "react";
import { Product, products } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalstorage";

interface ContextValue {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

export const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

export default function ShoppingCart({ children }: Props) {
  const [cart, setCart] = useLocalStorageState<Product[]>([], "cart");

  const addProduct = (anything: Product) => {
    setCart([...cart, anything]);
  };

  const removeProduct = (product: Product) => {
    let found = false;
    const filteredCart = cart.filter((item) => {
      if (!found && item.id === product.id) {
        found = true;
        return false;
      } else {
        return true;
      }
    });
    setCart(filteredCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
