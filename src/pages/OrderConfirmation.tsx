import { Box, Card, CardContent, Typography } from "@mui/material";
import { generateId } from "../../data";
import { useOrder } from "../contexts/OrderContext";

export default function OrderConfirmation() {
  const { order } = useOrder();
  const totalCost = order.products.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70vh",
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
        <p>Din beställning, ordernummer: {generateId()}</p>
        <p>Summa: {totalCost.toLocaleString("sv-SE")} kr </p>
      </Typography>
      {order.products.map((product) => (
        <Card
          variant="outlined"
          data-cy="product"
          key={product.id}
          sx={{
            width: "90%",
            margin: "0.8rem 0",
            backgroundColor: "white",
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
                src={product.image}
                alt={product.title}
                style={{ width: "30%", height: "100%" }}
              />
              <Typography variant="subtitle2" data-cy="product-title">
                {product.title}
              </Typography>
              <Typography variant="subtitle2">{product.quantity}</Typography>
              <Typography variant="subtitle2" data-cy="product-price">
                {product.price} kr
              </Typography>
              <Typography variant="subtitle2" data-cy="product-description">
                {product.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}

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
        <Typography variant="subtitle1" data-cy="customer-name">
          {order.customer.name}
        </Typography>
        <Typography variant="subtitle1">
          <span data-cy="customer-address">{order.customer.street},</span>
          <span data-cy="customer-zipcode">{order.customer.zipcode},</span>
          <span data-cy="customer-city"> {order.customer.city}</span>
        </Typography>
        <Typography variant="subtitle1" data-cy="customer-email">
          {order.customer.email}
        </Typography>
        <Typography variant="subtitle1" data-cy="customer-phone">
          {order.customer.phone}
        </Typography>
      </Box>
    </Box>
  );
}
