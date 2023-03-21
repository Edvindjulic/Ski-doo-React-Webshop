import React from "react";
import {
  Snackbar as MuiSnackbar,
  Box,
  Typography,
  Button,
  Paper,
} from "@mui/material";

interface SnackbarProps {
  open: boolean;
  handleClose: (
    event: React.SyntheticEvent<Element, Event> | Event,
    reason?: string
  ) => void;
  lastAddedProduct?: {
    title: string;
    price: number;
    image: string;
  };
}

export default function Snackbar({
  open,
  handleClose,
  lastAddedProduct,
}: SnackbarProps) {
  return (
    <>
      <MuiSnackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {lastAddedProduct && (
          <Paper
            elevation={4}
            sx={{
              bgcolor: "white",
              borderColor: "grey.300",
              borderWidth: 1,
              borderStyle: "solid",
              width: "18rem",
              padding: "1rem",
              borderRadius: "3px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <img
                src={lastAddedProduct.image}
                alt="product"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <Typography variant="subtitle1">{lastAddedProduct.title}</Typography>
              <Typography variant="subtitle1">{lastAddedProduct.price} kr</Typography>
            </Box>
            <Button variant="contained">Gå till kassan</Button>
          </Paper>
        )}
      </MuiSnackbar>
    </>
  );
}
