import { createContext, ReactNode, useContext, useState } from "react";
import { Product, products } from "../../data";

interface ContextValue {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (product: Product) => void;
  removeProduct: (product: string) => void;
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

  const removeProduct = (productID: string) => {
    let found = false;
    const filteredCart = cart.filter((item) => {
      if (!found && item.id === productID) {
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
