import { Box, Card, CardContent, Typography } from "@mui/material";
import { products } from "../../data/index";

export default function OrderConfirmation() {
  // find the product with id 1
  const product = products.find((p) => p.id === "5");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70vh",
        height: "50vh",
        backgroundColor: "#D9D9D9",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{
          height: "auto",
          width: "100%",
          fontWeight: "bold",
          backgroundColor: "lightblue",
          padding: "0.2rem",
          textAlign: "center",
        }}
      >
        Din beställning
      </Typography>
      <Card
        variant="outlined"
        sx={{
          width: "90%",
          margin: "0.8rem 0",
          backgroundColor: "white",
          height: "5rem",
          border: "1px solid black",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={product?.image}
              alt={product?.title}
              style={{ width: "30%", height: "100%" }}
            />
            <Typography variant="subtitle2">{product?.title}</Typography>
            <Typography variant="subtitle2">1st</Typography>
            <Typography variant="subtitle2">{product?.price} kr</Typography>
          </Box>
        </CardContent>
      </Card>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          height: "6vh",
          width: "100%",
          fontSize: "1rem",
          fontWeight: "bold",
          marginTop: "1rem",
          marginLeft: "2rem",
          textAlign: "left",
        }}
      >
        Din order levereras till följande adress
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "90%",
        }}
      >
        <Typography variant="subtitle1">Sven Svensson</Typography>
        <Typography variant="subtitle1">
          SvenssonGatan 10, 123 45, Svenninge
        </Typography>
        <Typography variant="subtitle1">sven@gmail.com</Typography>
        <Typography variant="subtitle1">0707-22 33 44</Typography>
      </Box>
    </Box>
  );
}
