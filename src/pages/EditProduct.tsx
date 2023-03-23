import { useParams } from "react-router-dom";
import { products } from "../../data";
import AdminForm from "../components/AdminForm";

export default function EditProduct() {
  const params = useParams();
  const selectedProduct = products.find((product) => product.id === params.id);

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
