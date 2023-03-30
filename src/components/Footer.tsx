import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        display: "flex",

        padding: "1rem",
        bottom: 0,
      }}
    >
      <Box sx={{ paddingLeft: "1rem" }}>
        <p>Ski-Doo </p>
        <p>support@skidoo.se</p>
        <p>0611-550602</p>
      </Box>
    </Box>
  );
}
