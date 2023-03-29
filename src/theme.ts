import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#adbccd',
      contrastText: '#0f1225',
    },
    secondary: {
      main: '#0f1225',
      contrastText: '#f1ece6',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    info: {
      main: '#eadbd4',
    }
  },
});


// #0f1225 - dark blue. Use for text and icons in the header
// #1f4b8e - blue. Use for buttons and links
// #adbccd - light blue. Use for borders and backgrounds
// #f1ece6 - cream. Use for backgrounds and borders
// #eadbd4 - creamy pink. Use for stand out elements