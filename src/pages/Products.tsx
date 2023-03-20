import { products } from "../../data";
import { useCart } from "../contexts/CartContext";

export default function Products() {
  const { addProduct } = useCart();

  return (
    <div>
      <h1>Products here</h1>

      {products.map((product) => (
        <div data-cy="product">
          <h2 data-cy="product-title">{product.title}</h2>
          <h2 data-cy="product-price">{product.price}</h2>
          <h2 data-cy="product-description">{product.description}</h2>
          <button
            data-cy="product-buy-button"
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
