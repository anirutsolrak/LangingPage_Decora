import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f3ffff',
    },
    secondary: {
      main: '#333333',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#f3ffff',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

export default theme;
