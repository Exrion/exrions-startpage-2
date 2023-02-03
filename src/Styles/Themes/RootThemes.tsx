import { createTheme } from "@mui/material";
import { archivo, breeSerif, sourceCodePro } from "../../Data/Fonts/fonts";

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
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
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
  typography: {
    h1: { fontSize: '5rem' },
    fontFamily: [
      'Archivo, sans-serif',
      '"Bree Serif", serif',
      '"Source Code Pro", monospace',
    ].join(',')
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [archivo, breeSerif, sourceCodePro],
        },
      }
    },
  }
});