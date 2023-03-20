import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import { Product } from "../../data";
import { useCart } from "../contexts/CartContext";

export default function BasicTable() {
  const { cart, addProduct, removeProduct } = useCart();
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  interface ProductMap {
    [id: string]: {
      product: Product;
      quantity: number;
    };
  }

  const cartUniqueItems = Object.values(
    cart.reduce((acc: ProductMap, product) => {
      if (acc[product.id]) {
        acc[product.id].quantity++;
      } else {
        acc[product.id] = {
          product,
          quantity: 1,
        };
      }
      return acc;
    }, {})
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350, maxWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "primary.main",
            }}
          >
            <TableCell>Products</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartUniqueItems.map(({ product, quantity }) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              data-cy="cart-item"
            >
              <TableCell component="th" scope="row">
                <Avatar
                  alt={product.title}
                  src={product.image}
                  sx={{ width: 150, height: 150 }}
                  variant="square"
                />
                {/* <img src={product.image} alt={product.title} /> */}
              </TableCell>
              <TableCell align="center">{product.title}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  onClick={() => removeProduct(product)}
                  data-cy="decrease-quantity-button"
                >
                  -
                </Button>{" "}
              </TableCell>
              <TableCell align="center" data-cy="product-quantity">
                {quantity}
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  onClick={() => addProduct(product)}
                  data-cy="increase-quantity-button"
                >
                  +
                </Button>
              </TableCell>
              <TableCell align="left">
                {(quantity * product.price).toLocaleString("sv-SE")} SEK
              </TableCell>
            </TableRow>
          ))}

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell colSpan={3} />
            <TableCell align="center">Total price:</TableCell>
            <TableCell align="left" data-cy="total-price">
              {totalPrice.toLocaleString("sv-SE")} SEK
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
