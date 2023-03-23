import { products } from "../../data";
import AdminForm, { defaultValues } from "../components/AdminForm";

const minProdukt = products[2];

export default function Admin() {
  return (
    <>
      <h1>Admin Page goes here</h1>
      <AdminForm product={minProdukt} isNewProduct={false} />
      <AdminForm product={defaultValues} isNewProduct={true} />
    </>
  );
}
