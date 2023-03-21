import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box>

      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer><Footer /></footer>

    </Box>
  );
}
