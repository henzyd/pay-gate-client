import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ee3308",
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
    secondary: {
      main: "#241F21",
      50: "#f8f7f8",
      100: "#f0eeef",
      200: "#dfd8db",
      300: "#c2b7bd",
      400: "#a18f97",
      500: "#86717b",
      600: "#6e5b63",
      700: "#594b51",
      800: "#4c4046",
      900: "#42383c",
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
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
      },
    },
  },
});

export default theme;
