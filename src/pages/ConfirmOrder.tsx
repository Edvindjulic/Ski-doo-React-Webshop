import CheckoutForm from "../components/CheckoutForm";
import BasicTable from "../components/table";
import { useCart } from "../contexts/CartContext";

export default function ConfirmOrder() {
  const { cart } = useCart();

  return (
    <div>
      {/* <div>Du har {cart.length} saker i kundvagnen</div>
      <BasicTable /> */}
      <CheckoutForm />
    </div>
  );
}
