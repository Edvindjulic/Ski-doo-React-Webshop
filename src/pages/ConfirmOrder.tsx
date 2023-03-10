import BasicTextFields from "../components/CheckoutForm";
import BasicTable from "../components/table";
import { useCart } from "../contexts/CartContext";

export default function ConfirmOrder() {
  const { cart } = useCart();

  return (
    <div>
      <div>{JSON.stringify(cart)}</div>
      <BasicTable />
      <BasicTextFields />
    </div>
  );
}
