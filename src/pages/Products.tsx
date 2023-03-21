import { useState } from "react";
import { CartItem, products } from "../../data";
import { useCart } from "../contexts/CartContext";

export default function Products() {
  const { addProduct } = useCart();

  return (
    <div>
      <h1>Products here</h1>

      {products.map((product) => (
        <div data-cy="product">
          <h2 data-cy="product-title">{product.title}</h2>
          <h6 data-cy="product-price">{product.price}</h6>
          <h6 data-cy="product-description">{product.description}</h6>
          <h6 data-cy="product-id">{product.id}</h6>
          <img src={product.image} alt={product.title} width="100px" />
          <button
            data-cy="product-buy-button"
            onClick={() => addProduct(product as CartItem)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
