import { Box } from "@mui/material";
import { theme } from "../theme";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,

        color: "white",
        width: "100%",
        display: "flex",

        padding: "1rem",
        bottom: 0,
      }}
    >
      <Box sx={{ paddingLeft: "1rem" }}>
        <h4>Ski-Doo</h4>
        <h3>support@skidoo.se</h3>
        <h3>0611-550602</h3>
      </Box>
    </Box>
  );
}
