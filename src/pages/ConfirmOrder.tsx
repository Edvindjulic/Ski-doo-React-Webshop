import BasicTable from "../components/table";
import { products } from "../data";

export default function ConfirmOrder() {
  return (
    <div>
      {/* <h1>Confirm order goes here</h1>
      <h2>ID: {products[0].id}</h2>
      <img src={products[0].image}></img>
      <h2>Title: {products[0].title}</h2>
      <h2>Description: {products[0].description}</h2>
      <h2>Pris: {products[0].price}</h2> */}

      <BasicTable />
    </div>
  );
}
