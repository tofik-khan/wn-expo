import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#0B1D37", // Deep Navy
        light: "#112D55",

        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#C5A059", // Gold Accent
        light: "#DBC08D",
        dark: "#8E733F",
        contrastText: "#FFFFFF",
      },
      success: {
        main: "#004b23", // Registration CTA Emerald
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#F8F9FA",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#0B1D37",
        secondary: "#556172",
      },
    },
    typography: {
      fontFamily: '"Inter", "Arial", sans-serif', // Default body font
      h1: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 800,
        fontSize: "3.5rem",
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700,
        fontSize: "2.5rem",
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700,
        fontSize: "2rem",
        "@media (max-width:600px)": {
          // For xs screens and up
          fontSize: "1rem",
        },
      },
      h4: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 600,
        fontSize: "1.5rem",
      },
      h5: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 600,
        fontSize: "1.25rem",
      },
      h6: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 600,
        fontSize: "1.1rem",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      },
      subtitle1: {
        fontSize: "1.5rem",
        lineHeight: 1.5,
        fontWeight: 400,
        color: "#556172",
      },
      subtitle2: {
        fontSize: "1.3rem",
        fontWeight: 600,
        color: "#C5A059",
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
      },
      button: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700,
        fontSize: "0.9rem",
      },
      caption: {
        fontSize: "0.75rem",
        letterSpacing: "0.05em",
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Rounded corners for a modern look
            padding: "10px 24px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  }),
);

export default theme;
