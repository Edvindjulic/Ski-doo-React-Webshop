import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import StyledBadge from "@mui/material/Badge";

import { NavLink } from "react-router-dom";
import { useCart } from "./contexts/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "7rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginLeft: "auto", fontSize: "10px" }}>
          SNÖSKOTERSHOPPEN{" "}
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
              <IconButton aria-label="cart" data-cy="cart-link">
                <StyledBadge
                  badgeContent={cart.length}
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
          color: "white",
        }}
      >
        <NavLink to="./">Start</NavLink>
        <NavLink to="./confirmbooking">Kassa</NavLink>
        <NavLink to="./admin">Admin</NavLink>
      </Box>
    </Box>
  );
}
