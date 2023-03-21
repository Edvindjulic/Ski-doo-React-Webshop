import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { CartItem, products } from "../../data";
import { useCart } from "../contexts/CartContext";
import Snackbar from "../components/Snackbar";

interface ProductInfoProps {
  selectedProductID: string;
}

export default function ProductInfo({}: ProductInfoProps) {
  const { cart, setCart } = useCart();
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

  const backgroundImage =
    "https://www.ski-doo.com/content/dam/global/en/ski-doo/my22/images/models/Ski-Doo-Model-Essential-Background.jpg";

  const selectedProduct = products.find((product) => product.id === "1");

  const card = (
    <React.Fragment>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">2024</Typography>
          <Typography variant="h5">{selectedProduct?.price}</Typography>
        </Box>
        <Typography variant="h4">{selectedProduct?.title}</Typography>
        <Typography>{selectedProduct?.description}</Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        height: "90vh",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "30rem",
          marginRight: "3rem",
          border: "1px solid green",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{}} variant="outlined">
          {card}
          <button
            data-cy="product-buy-button"
            onClick={() => addProduct(selectedProduct as CartItem)}
          >
            Add to cart
          </button>
        </Card>
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            width: "50%",
            height: "50%",
            backgroundImage: `url(${selectedProduct?.background})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: "100",
          }}
        >
          <Snackbar
            open={snackbarOpen}
            handleClose={handleSnackbarClose}
            lastAddedProduct={lastAddedProduct}
          />
        </Box>
      </Box>
    </Box>
  );
}
