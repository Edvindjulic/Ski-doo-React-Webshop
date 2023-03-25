import { createContext, ReactNode, useContext } from "react";
import { Product, products } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalstorage";

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
  const [product, setProduct] = useLocalStorageState<Product[]>(
    products,
    "products"
  );

  const clearProduct = () => {
    setProduct([]);
  };

  function addProduct(product: Product) {
    setProduct((prevProduct) => [...prevProduct, product]);
  }

  function removeProduct(product: Product) {
    setProduct((prevProduct) => {
      const updatedProduct = prevProduct.filter(
        (item) => item.id !== product.id
      );
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
