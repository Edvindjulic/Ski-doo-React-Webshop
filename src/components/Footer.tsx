import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        bottom: 0,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CopyrightIcon />
          <p>2023 Snöskotershoppen</p>
        </Box>
        <p>support@snoskotershoppen.se</p>
        <p>0611-550602</p>
      </Box>
    </Box>
  );
}
