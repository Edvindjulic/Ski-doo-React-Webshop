import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import { CartItem, Product, products } from "../../data";
import { useCart } from "../contexts/CartContext";

export default function BasicTable() {
  const { cart, setCart } = useCart();
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

  const removeById = (id: string) => {
    let found = false;
    const filteredCart = cart.filter((item) => {
      if (!found && item.id === id) {
        found = true;
        return false;
      } else {
        return true;
      }
    });
    setCart(filteredCart);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350, maxWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "primary.main",
            }}
          >
            <TableCell>Products</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartUniqueItems.map(({ product, quantity }) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar
                  alt={product.title}
                  src={product.image}
                  sx={{ width: 150, height: 150 }}
                  variant="square"
                />
              </TableCell>
              <TableCell align="right">{product.title}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => removeById(product.id)}
                >
                  -
                </Button>{" "}
              </TableCell>
              <TableCell align="right">{quantity}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => setCart([...cart, product])}
                >
                  +
                </Button>
              </TableCell>
              <TableCell align="right">
                {(quantity * product.price).toLocaleString("sv-SE")} SEK
              </TableCell>
            </TableRow>
          ))}

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell colSpan={3} />
            <TableCell align="right">Total summa:</TableCell>
            <TableCell align="right">
              {cart
                .reduce((acc, product) => acc + product.price, 0)
                .toLocaleString("sv-SE")}{" "}
              SEK
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
