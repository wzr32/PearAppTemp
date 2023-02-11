import { createTheme, responsiveFontSizes } from '@mui/material';

export const customTheme = responsiveFontSizes ( createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
}) );
