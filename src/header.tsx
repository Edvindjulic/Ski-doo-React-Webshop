import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import StyledBadge from "@mui/material/Badge";

import { NavLink } from "react-router-dom";
import { useCart } from "./contexts/CartContext";

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
        height: "7rem",
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& a": {
            color: "black",
            textDecoration: "none",
          },
        }}
      >
        <Box
          sx={{
            marginLeft: "auto",
            fontSize: "50px",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            alignItems: 'center',
            '& img': {
              width: '200px',
            }
          }}
        >
          <NavLink to="./">
            {" "}
            <img
              src="/ski-doo-logo.svg"
              alt=""
            />{" "}
          </NavLink>{" "}
        </Box>
        <Box
          sx={{
            color: "Grey",
            fontSize: "2rem",
            marginLeft: "auto",
            marginRight: "1rem",
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

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
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
      </Box>
    </Box>
  );
}
