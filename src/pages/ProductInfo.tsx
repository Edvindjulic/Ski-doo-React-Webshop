import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Avatar, Box, Button, Card, CardContent, Typography } from "@mui/material";
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
        <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "space-between", }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0.8rem' }} >
          <Avatar src={selectedProduct?.image} alt="avatar" sx={{ width:'10rem', height: '5rem', padding: '0.5rem'}} />
          <Box sx={{padding: '1.2rem'}} >
            <Typography data-cy="product-title" variant="h4">{selectedProduct?.title}</Typography>
          </Box>
        </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', padding:'0.5rem 1rem', fontSize: '60px' }}>
            <Typography variant="h5">2024</Typography>
            <Typography data-cy="product-price" variant="h5">{selectedProduct?.price}<span>SEK</span></Typography>
          </Box>
        </Box>
        <Box sx={{padding: '0.8rem', display: 'flex', flexWrap: 'wrap'}}>
          <Typography data-cy="product-description">{selectedProduct?.description}</Typography>
        </Box>
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
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: '15%',
        backgroundRepeat: "no-repeat",
        height: "78.4vh",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: '0.5rem' // mediaquery!
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: 'wrap',
          maxWidth: "40rem",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        <Card sx={{display: 'flex', flexDirection: 'column', zIndex: '10', height: '22rem'}} variant="outlined">
          {card}
          
            <Box sx={{display: 'flex', justifyContent:'flex-end', marginLeft:'auto', marginTop: 'auto' , width: '100%' }}> 
              <Button variant='contained' sx={{width: '4.5rem', margin: '0 0.8rem 0.8rem 0' }}
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

                <AddShoppingCartIcon />
              </Button>
            </Box>

        </Card>
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            width: "50%",
            height: "50%",
            backgroundImage: `url(${selectedProduct?.background})`, // behöver mediaquery!
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
