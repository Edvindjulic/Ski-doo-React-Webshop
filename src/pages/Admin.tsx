import {
  Avatar,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "../components/Dialog";
import { useProduct } from "../contexts/ProductContext";

export default function Admin() {
  const navigate = useNavigate();
  const { product } = useProduct();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box>
        <Button
          data-cy="admin-add-product"
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/admin/product/new");
          }}
        >
          Lägg till en ny produkt
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Table
          sx={{ minWidth: 330, maxWidth: 800 }}
          aria-label="simple table"
          size="small"
          padding="none"
        >
          <TableHead>
            <TableRow
              sx={{
                bgcolor: "primary.main",
              }}
            >
              <TableCell align="center" sx={{ typography: "h6" }}>
                Bild
              </TableCell>
              <TableCell align="center" sx={{ typography: "h6" }}>
                ID
              </TableCell>
              <TableCell align="center" sx={{ typography: "h6" }}>
                Titel
              </TableCell>
              <TableCell align="center" sx={{ typography: "h6" }}>
                Pris{" "}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center" sx={{ typography: "h6" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((product) => (
              <TableRow
                key={product.id}
                sx={{
                  "&:last-child td, &:last-child th": {},
                }}
                data-cy="product"
              >
                <TableCell component="th" scope="row" sx={{ width: "20%" }}>
                  <Avatar
                    alt={product.title}
                    src={product.image}
                    sx={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "15rem",
                    }}
                    variant="rounded"
                  />
                </TableCell>
                <TableCell
                  align="center"
                  data-cy="product-id"
                  sx={{ width: "16%" }}
                >
                  {product.id}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ width: "16%" }}
                  data-cy="product-title"
                >
                  {product.title}
                </TableCell>
                <TableCell align="center" data-cy="product-price">
                  {product.price}
                </TableCell>
                <TableCell align="center" sx={{ width: "16%" }}>
                  <DeleteDialog {...product} />
                </TableCell>
                <TableCell align="center" sx={{ width: "16%" }}>
                  <Button
                    color="primary"
                    onClick={() => {
                      navigate("/admin/product/" + product.id);
                    }}
                    data-cy="admin-edit-product"
                  >
                    Redigera
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
