import { Box, Card } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartItem, products } from "../../data";
import Snackbar from "../components/Snackbar";
import { useCart } from "../contexts/CartContext";

export default function Products() {
  const { addProduct } = useCart();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState<
    | {
        title: string;
        price: number;
        image: string;
      }
    | undefined
  >(undefined);

  const handleSnackbarClose = (
    event: React.SyntheticEvent<Element, Event> | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
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
      {products.map((product) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "30%",
            margin: "1rem",
            padding: "1rem",
          }}
          data-cy="product"
        >
          <Link to={"/product/" + product.id}>
            <img src={product.image} alt={product.title} width="150px" />

            <Box
              sx={{
                display: "flex",
                fontSize: "25px",
              }}
            >
              <Box sx={{ fontStyle: "italic", paddingRight: "0.8rem" }}>
                <h2 data-cy="product-title">{product.brand}</h2>
              </Box>
              <Box>
                <h2 data-cy="product-title">{product.title}</h2>
              </Box>
            </Box>
          </Link>
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
          <p data-cy="product-description">{product.description}</p>
          {/* <h6 data-cy="product-id">{product.id}</h6> */}
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
                addProduct(product as CartItem);
                setSnackbarOpen(true);
                setLastAddedProduct({
                  title: product.title,
                  price: product.price,
                  image: product.image,
                });
              }}
            >
              Add to cart
            </button>
          </Box>
        </Card>
      ))}
      <Snackbar
        open={snackbarOpen}
        handleClose={handleSnackbarClose}
        lastAddedProduct={lastAddedProduct}
      />
    </Box>
  );
}
