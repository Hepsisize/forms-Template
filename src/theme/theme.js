import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#ffcc80",
      main: "#ff9900",
      dark: "#cc7a00",
      contrastText: "#ffffff",
    },
    background: {
      primary: "#ffba07",
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
});
