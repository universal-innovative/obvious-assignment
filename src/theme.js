import { createTheme } from "@mui/material/styles";

const white = "#FFFFFF";
const whitish = "#F0F0F0";
const grey = "#c9c0ad";
const black = "0A0A0A";
const night = "#040406";

const red = "#F02626";

const theme = createTheme({
  palette: {
    background: {
      default: night,
    },

    primary: {
      main: white,
      dark: "#eaf4fc",
      light: "#FFFFFF",
    },
    secondary: {
      main: red,
    },
    common: {
      black,
      grey,
      red,
      whitish,
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 700,
      color: white,
    },
    h2: {
      fontFamily: "Poppins",
      fontSize: "2.5rem",
      lineHeight: "56px",
      fontWeight: 600,
      color: white,
    },

    body1: {
      fontSize: "14px",
      lineHeight: "18px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 300,
      color: black,
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": { minHeight: "48px" },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: grey,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // height: '3.7rem',
          "& label": {
            color: whitish,
          },
          "& label.Mui-focused": {
            color: white,
          },

          "& .MuiInputBase-input": {
            borderColor: white,
            color: "white",
            // height: '3.5rem',
          },
          "& .MuiOutlinedInput": {
            "& fieldset": {
              borderColor: white,
              color: "white !important",
              // height: '3.5rem',
            },
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
});
export default theme;
