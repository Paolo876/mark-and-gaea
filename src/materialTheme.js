import { createTheme } from '@mui/material';


export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#565857',
    },
    secondary: {
      main: '#455e58',
    },
    background: {
      default: '#f1e9e7',
      paper: '#d8cec2',
    },
    text: {
      // primary: '#565857',
      // secondary: 'rgba(86,88,87,0.75)',
      // disabled: 'rgba(86,88,87,0.5)',
    },
    info: {
      main: '#cad9d2',
    },
    success: {
      main: '#8aa48c',
    },
  },
  typography: {
    fontFamily: "Bodoni",
    h1: {
      fontFamily: "Bodoni-Bold",
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: "Bodoni-Bold",
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: "Bodoni-Bold",
      textTransform: 'uppercase',
      letterSpacing: 8
    },
    h4: {
      fontFamily: "Amalfi",
      letterSpacing: 4,

    },
  }
});