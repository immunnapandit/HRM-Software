import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#6366f1" },
    secondary: { main: "#22c55e" },
    background: { default: "#f1f5f9" },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h4: { fontWeight: 600 },
    h6: { fontWeight: 500 },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;