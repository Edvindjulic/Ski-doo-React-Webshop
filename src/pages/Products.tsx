import {
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../../data";
import Snackbar from "../components/Snackbar";
import { useCart } from "../contexts/CartContext";
import { useProduct } from "../contexts/ProductContext";
import { theme } from "../theme";

export default function Products() {
  const { product } = useProduct();

  const { addProduct } = useCart();
  const [snackbarOpen, setSnackbarOpen] =
    useState(false);
  const [lastAddedProduct, setLastAddedProduct] =
    useState<
      | {
          title: string;
          price: number;
          image: string;
        }
      | undefined
    >(undefined);

  const handleSnackbarClose = (
    event:
      | React.SyntheticEvent<Element, Event>
      | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  const backgroundImage =
    "https://www.ski-doo.com/content/dam/global/en/ski-doo/my22/images/models/Ski-Doo-Model-Essential-Background.jpg";
  const matches = useMediaQuery(
    "(min-width:500px)"
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundImage: `url(${backgroundImage})`,
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
            margin: "1rem",
            padding: "2rem",
            maxHeight: matches
              ? "29.6rem"
              : "none",
            justifyContent: "center",
            height: "100%",
            width: matches ? "18rem" : "100%",
          }}
          data-cy="product"
        >
          <Link to={"/product/" + product.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "5rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "150px",
                  height: "150px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginTop: "2rem",
              }}
            >
              <Box
                sx={{
                  fontSize: "16px",
                }}
              >
                <Typography variant="subtitle2">
                  2024
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: "bold",
                }}
              >
                <Typography
                  variant="h5"
                  data-cy="product-title"
                >
                  {product.title}
                </Typography>
              </Box>
              <Box sx={{}}>
                <Typography
                  variant="subtitle2"
                  data-cy="product-price"
                >
                  Pris {product.price} kr
                </Typography>
              </Box>
              <Box
                sx={{
                  maxWidth: "30rem",
                  height: "10rem",
                }}
              >
                <p data-cy="product-description">
                  {product.description}
                </p>
              </Box>
            </Box>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0.5rem",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor:
                  theme.palette.secondary.main,
                color:
                  theme.palette.secondary
                    .contrastText,
              }}
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
              Lägg till i kundvagnen
            </Button>
          </Box>
        </Card>
      ))}
      <Snackbar
        data-cy="added-to-cart-toast"
        open={snackbarOpen}
        handleClose={handleSnackbarClose}
        lastAddedProduct={lastAddedProduct}
      />
    </Box>
  );
}
