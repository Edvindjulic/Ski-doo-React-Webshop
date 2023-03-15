import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { products } from "../../data";
import { useCart } from "../contexts/CartContext";


interface ProductInfoProps {
  selectedProductID: string;
}

export default function ProductInfo({}: // selectedProductID,
ProductInfoProps) {

  const { cart, setCart } = useCart();


  const backgroundImage =
    "https://www.ski-doo.com/content/dam/global/en/ski-doo/my22/images/models/Ski-Doo-Model-Essential-Background.jpg";

  // const selectedProduct = products[0];
  // const selectedProduct = products.find((product) => product.id === selectedProductID)
  const selectedProduct = products.find(
    (product) => product.id === "1"
  );
  // const ModelImage = selectedProduct?.background;
  const card = (
    <React.Fragment>
      <CardContent>
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">2024</Typography>
          <Typography variant="h5">
            {selectedProduct?.price}
          </Typography>
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
        // backgroundSize: "cover",
        height: "90vh",
        alignItems: "flex-end",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          width: "30rem",
          marginRight: "3rem",
          border: "1px solid green",
          flexDirection: "column",
          // justifyContent: 'center',
          alignItems: "center",
        }}>
        <Card sx={{}} variant="outlined">
          {card}
          <Button variant="contained" onClick={() => setCart([...cart, selectedProduct])} > + </Button>
         < div>Du har {cart.length} saker i kundvagnen</div>
        </Card>
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            width: "50%",
            height: "50%",
            // border: "1px solid black",
            backgroundImage: `url(${selectedProduct?.background})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: "100",
          }}></Box>
      </Box>
    </Box>
  );
}
