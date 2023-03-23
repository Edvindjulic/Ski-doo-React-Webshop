import { useParams } from "react-router-dom";
import { Product } from "../../data";
import AdminForm, { defaultValues } from "../components/AdminForm";

export default function EditProduct() {
  const params = useParams();

  return (
    <>
      <h2>Lägg till en ny produkt!</h2>
      <AdminForm product={defaultValues as Product} isNewProduct={true} />
    </>
  );
}
