import { Box } from "@mui/material";
import { Product } from "../../data";
import AdminForm, { defaultValues } from "../components/AdminForm";

export default function EditProduct() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Lägg till en ny produkt</h2>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <AdminForm product={defaultValues as Product} isNewProduct={true} />
      </Box>
    </Box>
  );
}
