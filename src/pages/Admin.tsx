import { Box, Button, Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

export default function Admin() {
  const navigate = useNavigate();
  const { product, clearProduct } = useProduct();

  return (
    <>
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
      <Button
        data-cy="admin-add-product"
        variant="contained"
        color="error"
        onClick={() => {
          clearProduct();
        }}
      >
        Ta bort produkter
      </Button>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "1rem",
          "& a": {
            color: "black",
            textDecoration: "none",
          },
        }}
      >
        {product.map((product) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "100%",
              minWidth: "10rem",
              margin: "1rem",
              padding: "1rem",
            }}
            data-cy="product"
          >
            <Link
              to={"/admin/product/" + product.id}
              data-cy="admin-edit-product"
            >
              <img src={product.image} alt={product.title} width="150px" />

              <Box
                sx={{
                  display: "flex",
                  fontSize: "15px",
                }}
              >
                <Box sx={{ fontStyle: "italic", paddingRight: "0.8rem" }}>
                  <h2>{product.brand}</h2>
                </Box>
                <Box>
                  <h2 data-cy="product-title">{product.title}</h2>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  fontSize: "25px",
                }}
              >
                <h6>2023</h6>
                <h6 data-cy="product-price">{product.price}</h6>
              </Box>
              <Box
                sx={{ maxWidth: "30rem", display: "flex", flexWrap: "wrap" }}
              >
                <p data-cy="product-description">{product.description}</p>
              </Box>
            </Link>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0.5rem",
              }}
            >
              <button
                data-cy="product-buy-button"
                onClick={() => {
                  navigate("/admin/product/" + product.id);
                }}
              >
                Ändra produkt
              </button>
              <span data-cy="product-id">{product.id}</span>
              <span data-cy="product-price">{product.price}</span>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}
