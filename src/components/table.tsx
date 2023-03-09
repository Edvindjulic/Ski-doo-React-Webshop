import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { products } from "../data";
import { Avatar, TableFooter } from "@mui/material";

export default function BasicTable() {
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Amount</TableCell>
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
              <TableCell align="right">{product.id}</TableCell>
              <TableCell align="right">
                {product.price.toLocaleString("sv-SE")} SEK
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
