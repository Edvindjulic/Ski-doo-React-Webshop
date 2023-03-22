import { useOrder } from "../contexts/OrderContext";

export default function Admin() {
  const { order } = useOrder();

  return (
    <>
      <h1>Admin Page goes here</h1>
    </>
  );
}
