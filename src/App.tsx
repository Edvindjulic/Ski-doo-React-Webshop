import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Hello Students, begin here!</h1>
      <Button variant="contained">TEST</Button>
      <Button variant="text">TEST</Button>
      <Outlet/>
    </div>
  );
}


