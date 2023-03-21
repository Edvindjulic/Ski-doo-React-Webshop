import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ShoppingCart from "./contexts/CartContext";
import "./index.css";
import Admin from "./pages/Admin";
import ConfirmBooking from "./pages/ConfirmBooking";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import OrderProvider from "./contexts/OrderContext";
import ProductInfo from "./pages/ProductInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Products />} />
      <Route path="product/:id" element={<ProductInfo />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="confirmbooking" element={<ConfirmBooking />} />
      <Route path="admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OrderProvider>
      <ShoppingCart>
        <RouterProvider router={router} />
      </ShoppingCart>
    </OrderProvider>
  </React.StrictMode>
);
