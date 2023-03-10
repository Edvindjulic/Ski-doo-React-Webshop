import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";



const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h5">2024</Typography> 
        <Typography variant="h5">219 999kr</Typography>
      </Box>
      <Typography variant="h4">Brand/Model</Typography>
      <Typography>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugiat, alias corrupti asperiores amet soluta modi beatae qui expedita rem laborum quasi, veniam cum consectetur saepe pariatur tempora temporibus esse!</Typography>
    </CardContent>
    
  </React.Fragment>
)



export default function ProductInfo () {

  const backgroundImageUrl = 
  "https://www.ski-doo.com/content/skidoo/sv_se/modeller/djup-sno/freeride/_jcr_content/root/modelteaser.coreimg.png/1676660948435/ski-my24-free-standard-moon-neo-mint-000vdrc00-studio-34fr-na.png";

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
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
        <h2>Product title goes here</h2>
        
        
        <Card sx={{}} variant="outlined">{card}<button>placeholder-knapp</button></Card>
        
      </Box>
    </Box>
  )
}