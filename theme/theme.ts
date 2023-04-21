import { createTheme, TextField } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#89CED9',
      contrastText: '#020202',
    },
    secondary: {
      main: '#f8f2ce',
      contrastText: '#020202',
    },
    background: {
      default: '#020202',
    },
    text: {
      primary: '#f8f2c3',
      secondary: '#f8f2c3',
      disabled: '#493d3f',
    },
    success: {
      main: '#4BB543',
      contrastText: '#f8f2c3',
    },
    error: {
      main: '#EA3862',
      contrastText: '#f8f2c3',
    },
    warning: {
      main: '#f56217',
      contrastText: '#f8f2c3',
    },
  },
});
