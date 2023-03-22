import { createContext, ReactNode, useContext } from "react";
import { CartItem } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalstorage";

interface ContextValue {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addProduct: (product: CartItem) => void;
  removeProduct: (product: CartItem) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

export default function ShoppingCart({ children }: Props) {
  const [cart, setCart] = useLocalStorageState<CartItem[]>([], "cart");

  // const addProduct = (anything: CartItem) => {
  //   if (anything.quantity === undefined) {
  //     anything.quantity = 1;
  //   } else {
  //     anything.quantity++;
  //   }
  //   setCart([...cart, anything]);
  //   console.log(cart);
  // };

  const clearCart = () => {
    setCart([]);
  };

  const addProduct = (product: CartItem) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex === -1) {
      // Product not found, add it with quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      // Product already exists, increment quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    }
  };

  function removeProduct(product: CartItem) {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex === -1) {
        // Product not found, return the original cart state
        return prevCart;
      }

      const updatedCart = [...prevCart];
      if (updatedCart[existingProductIndex].quantity === 1) {
        // Remove the product from the cart
        updatedCart.splice(existingProductIndex, 1);
      } else {
        // Decrement the quantity of the existing product
        updatedCart[existingProductIndex].quantity--;
      }

      return updatedCart;
    });
  }

  // const removeProduct = (product: CartItem) => {
  //   product.quantity--;
  //   let found = false;
  //   const filteredCart = cart.filter((item) => {
  //     if (!found && item.id === product.id) {
  //       found = true;
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });

  //   setCart(filteredCart);
  //   console.log(filteredCart);
  // };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
