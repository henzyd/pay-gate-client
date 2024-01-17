import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EE3308",
      50: "#fff4ed",
      100: "#ffe6d4",
      200: "#ffc9a8",
      300: "#ffa472",
      400: "#fe7339",
      500: "#fd4d12",
      600: "#ee3308",
      700: "#c52309",
      800: "#9c1d10",
      900: "#7e1b10",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            padding: "11px 13.5px",
          },
        },
      },
    },
  },
});

export default theme;
