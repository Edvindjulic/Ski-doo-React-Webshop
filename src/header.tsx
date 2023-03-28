import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import StyledBadge from "@mui/material/Badge";

import { NavLink } from "react-router-dom";
import Logo from "./components/Logo";
import { useCart } from "./contexts/CartContext";

export default function Header() {
  const { cart } = useCart();
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.primary.main,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        textDecoration: "none",
        padding: "1rem",
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
            alignItems: "center",
            padding: "0.5rem 0",
          }}
        >
          <NavLink to="./">
            <Logo
              theme={theme}
              width={200}
              height={50}
            />
          </NavLink>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            padding: "0 1rem",
            textDecoration: "none",
            color: "black",
            fontFamily: "Oswald, sans-serif",
            fontSize: "1.3rem",
            "& a": {
              color: "black",
              textDecoration: "none",
              "&:hover": {
                color: "rgb(0, 0, 0, 0.5)",
              },
            },
          }}
        >
          <NavLink to="./">Start</NavLink>
          <NavLink to="./confirmation">
            Kassa
          </NavLink>
          <NavLink
            to="./admin"
            data-cy="admin-link"
          >
            Admin
          </NavLink>
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
