import { createContext, ReactNode, useContext, useState } from "react";
import { Product, products } from "../../data";

interface ContextValue {
  product: Product[];
  setProduct: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearProduct: () => void;
}

export const ProductContext = createContext<ContextValue>(null as any);
export const useProduct = () => useContext(ProductContext);

interface Props {
  children: ReactNode;
}

export default function ProductInventory({ children }: Props) {
  const [product, setProduct] = useState<Product[]>(products);

  const clearProduct = () => {
    setProduct([]);
  };

  const addProduct = (product: Product) => {
    const existingProductIndex = product.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex === -1) {
      // Product not found, add it with quantity of 1
      setProduct([...product, { ...product, quantity: 1 }]);
    } else {
      // Product already exists, increment quantity
      const updatedProduct = [...product];
      updatedProduct[existingProductIndex].quantity++;
      setProduct(updatedProduct);
    }
  };

  function removeProduct(product: Product) {
    setProduct((prevProduct) => {
      const existingProductIndex = prevProduct.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex === -1) {
        // Product not found, return the original product state
        return prevProduct;
      }

      const updatedProduct = [...prevProduct];
      if (updatedProduct[existingProductIndex].quantity === 1) {
        // Remove the product from the product
        updatedProduct.splice(existingProductIndex, 1);
      } else {
        // Decrement the quantity of the existing product
        updatedProduct[existingProductIndex].quantity--;
      }

      return updatedProduct;
    });
  }

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        addProduct,
        removeProduct,
        clearProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
