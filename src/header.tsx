import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import StyledBadge from "@mui/material/Badge";

import { NavLink } from "react-router-dom";
import { useCart } from "./contexts/CartContext";
import Logo from "./components/Logo";

export default function Header() {
  const { cart } = useCart();

  return (
    <Box
      sx={{
        background: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        textDecoration: "none",
        padding: '1rem'
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          "& a": {
            color: "black",
            textDecoration: "none",
          },
        }}
      >
        <Box
          sx={{
            fontSize: "50px",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            alignItems: 'center',
          }}
        >
          <NavLink to="./">
            <Logo fill="black" width={400} height={50} />
          </NavLink>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            gap: '1rem',
            padding: "0 1rem",
            textDecoration: "none",
            color: "black",
            "& a": {
              color: "black",
              textDecoration: "none",
              "&:hover": {
                color: "yellow",
              },
            },
          }}
        >
          <NavLink to="./">Start</NavLink>
          <NavLink to="./confirmation">
            Kassa
          </NavLink>
          <NavLink to="./admin">Admin</NavLink>
          <Box
            sx={{
              color: "Grey",
              fontSize: "2rem",
            }}
          >
            <Tooltip title="Kundvagn">
              <NavLink to="./checkout">
                <IconButton
                  aria-label="cart"
                  data-cy="cart-link"
                  color="success"
                >
                  <StyledBadge
                    badgeContent={cart.reduce(
                      (total, item) =>
                        total + item.quantity,
                      0
                    )}
                    color="warning"
                    data-cy="cart-items-count-badge"
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </NavLink>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
