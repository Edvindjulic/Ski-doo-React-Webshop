import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import { products } from "../../data";
import { useCart } from "../contexts/CartContext";

export default function BasicTable() {
  const { cart, setCart } = useCart();
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

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
            <TableCell sx={{ color: "text.secondary" }}>Products</TableCell>
            <TableCell sx={{ color: "text.primary" }} align="right"></TableCell>
            <TableCell
              sx={{ color: "text.disabled" }}
              align="right"
            ></TableCell>
            <TableCell align="right"></TableCell>

            <TableCell align="right"></TableCell>

            <TableCell align="right">
              Summa: {totalPrice.toLocaleString("sv-SE")} SEK
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
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
                  onClick={() => setCart([...cart, product])}
                >
                  +
                </Button>
              </TableCell>
              <TableCell align="right">
                {cart.filter((item) => item.id === product.id).length}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => removeById(product.id)}
                >
                  -
                </Button>{" "}
              </TableCell>
              <TableCell align="right">
                {(
                  cart.filter((item) => item.id === product.id).length *
                  product.price
                ).toLocaleString("sv-SE")}{" "}
                SEK
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
