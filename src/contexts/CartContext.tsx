import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem, Product, products } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalstorage";

interface ContextValue {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addProduct: (product: CartItem) => void;
  removeProduct: (product: CartItem) => void;
}

export const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

export default function ShoppingCart({ children }: Props) {
  const [cart, setCart] = useLocalStorageState<CartItem[]>([], "cart");

  const addProduct = (anything: CartItem) => {
    if (anything.quantity === undefined) {
      anything.quantity = 1;
    } else {
      anything.quantity++;
    }
    setCart([...cart, anything]);
    console.log(cart);
  };

  const removeProduct = (product: CartItem) => {
    product.quantity--;
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
    console.log(filteredCart);
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
