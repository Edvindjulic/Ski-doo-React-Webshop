import { Box, Card } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { CartItem, products } from "../../data";
import AdminForm, { defaultValues } from "../components/AdminForm";

const minProdukt = products[2];

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
