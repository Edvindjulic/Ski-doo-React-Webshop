import { products } from "../../data";
import AdminForm from "../components/AdminForm";

const minProdukt = products[0];

export default function Admin() {
  return (
    <>
      <h1>Admin Page goes here</h1>
      <AdminForm myProduct={minProdukt} />
    </>
  );
}
