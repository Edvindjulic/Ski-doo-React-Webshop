import { Product } from "../../data";
import AdminForm, { defaultValues } from "../components/AdminForm";

export default function EditProduct() {
  return (
    <>
      <h2>Lägg till en ny produkt!</h2>
      <AdminForm product={defaultValues as Product} isNewProduct={true} />
    </>
  );
}
