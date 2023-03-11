import { generateId } from "../../data";
import BasicTextFields from "../components/CheckoutForm";
import BasicTable from "../components/table";
import { useCart } from "../contexts/CartContext";

export default function ConfirmOrder() {
  const { cart } = useCart();

  return (
    <div>
      <div>Du har {cart.length} saker i kundvagnen</div>
      <div>
        {cart.map((product) => (
          <p key={generateId()}>{product.title}</p>
        ))}
      </div>
      <BasicTable />
      <BasicTextFields />
    </div>
  );
}
