import { IconButton } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import StyledBadge from "@mui/material/Badge";
import CheckoutForm from "../components/CheckoutForm";
import BasicTable from "../components/table";
import { useCart } from "../contexts/CartContext";

export default function ConfirmOrder() {
  const { cart } = useCart();

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cart.length} color="warning">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <BasicTable />
      <CheckoutForm />
    </div>
  );
}
