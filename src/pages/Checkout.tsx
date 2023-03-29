import { Box, Typography } from "@mui/material";
import CheckoutForm from "../components/CheckoutForm";
import BasicTable from "../components/table";

export default function Checkout() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography variant="h4">Kassa </Typography>
      <BasicTable />
      <CheckoutForm />
    </Box>
  );
}
