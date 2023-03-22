import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CartItem, products } from "../../data";
import Snackbar from "../components/Snackbar";
import { useCart } from "../contexts/CartContext";

export default function ProductInfo() {
  const params = useParams();

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

  const selectedProduct = products.find((product) => product.id === params.id);

  const card = (
    <React.Fragment>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">2024</Typography>
          <Typography data-cy="product-price" variant="h5">{selectedProduct?.price}</Typography>
        </Box>
        <Typography data-cy="product-title" variant="h4">{selectedProduct?.title}</Typography>
        <Typography data-cy="product-description">{selectedProduct?.description}</Typography>
      </CardContent>
    </React.Fragment>
  );

  if (!selectedProduct) {
    return <h1>Product not found</h1>;
  }
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
        <Card sx={{display: 'flex', justifyContent: 'flex-end', zIndex: '10'}} variant="outlined">
          {card}
          <img src={selectedProduct.image} alt="" width='50px'/>
          <button
            data-cy="product-buy-button"
            onClick={() => {
              addProduct(selectedProduct as CartItem);
              setSnackbarOpen(true);
              setLastAddedProduct({
                title: selectedProduct.title,
                price: selectedProduct.price,
                image: selectedProduct.image,
              });
            }}
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
