import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FCFFE7',
    },
    secondary: {
      main: '#2B3467',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif', 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
      },
    },
  },
});

export default theme;