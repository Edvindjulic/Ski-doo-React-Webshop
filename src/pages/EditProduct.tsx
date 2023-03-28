import { useParams } from "react-router-dom";
import AdminForm from "../components/AdminForm";
import { useProduct } from "../contexts/ProductContext";

export default function EditProduct() {
  const params = useParams();
  const { product } = useProduct();

  const selectedProduct = product.find((chosen) => chosen.id === params.id);

  return (
    <>
      <h2>
        {selectedProduct?.brand}
        {selectedProduct?.title}
      </h2>
      <AdminForm product={selectedProduct} isNewProduct={false} />
    </>
  );
}
