import { createTheme } from "@mui/material";
import RubikTtf from '../../Data/Fonts/Rubik/Rubik-Medium.ttf';

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
    fontFamily: 'Rubik, sans-serif',
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
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Rubik'), local('Rubik-Medium'), url(${RubikTtf}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  }
});