import { createTheme } from "@mui/material";

export const startpageTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C84B31',
    },
    secondary: {
      main: '#346751',
    },
    background: {
      default: '#161616',
    },
    info: {
      main: '#2196f3',
    },
  },
  typography: {
    h1: { fontSize: '5rem' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export const portfolioTheme = createTheme({

});