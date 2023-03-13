import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { products } from "../../data";


interface ProductInfoProps {
  selectedProductID: string;
}



export default function ProductInfo ({ selectedProductID }: ProductInfoProps ) {
  
  const backgroundImage = 
  "https://www.ski-doo.com/content/dam/global/en/ski-doo/my22/images/models/Ski-Doo-Model-Essential-Background.jpg";
  
  const selectedProduct = products[0];
  // const selectedProduct = products.find((product) => product.id === selectedProductID)
  const ModelImage = selectedProduct?.background;
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h5">2024</Typography> 
          <Typography variant="h5">{selectedProduct?.price}</Typography>
        </Box>
        <Typography variant="h4">{selectedProduct?.title}</Typography>
        <Typography>{selectedProduct?.description}</Typography>
      </CardContent>
      
    </React.Fragment>
  )
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
      justifyContent: "center"
    }}
    >
      <Box sx={{ 
        display: "flex",
        width: '30rem',
        marginRight: '3rem',
        border: "1px solid green",
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        }}>
        
        
        <Card sx={{}} variant="outlined">{card}<button>Add to Cart*</button></Card>
        
        <Box sx={{
          position: 'absolute',
          width: '100%',
          maxHeight: '50vh',
          objectFit: 'contain',
          border: '1px solid black',
          background: ModelImage ? `url(${ModelImage}) no-repeat center/contain` : 'none',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }} ></Box>
      </Box>
    </Box>
  )
}