import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    mintButton: {
      main: "#F04F4F",
      light: "#FA6262",
      dark: "#D23B3B",
      contrastText: "#FFFFFF"
    },
    discordButton: {
      main: "#9F4FF0",
      light: "#BE82FB",
      dark: "#853DCC",
      contrastText: "#FFFFFF"
    },
    twitterButton: {
      main: "#87C5FF",
      light: "#A9D6FF",
      dark: "#78B9F4",
      contrastText: "#FFFFFF"
    }
  },
});

declare module '@mui/material/styles' {
  interface PaletteOptions {
    mintButton: PaletteOptions['primary'];
    discordButton: PaletteOptions['primary'];
    twitterButton: PaletteOptions['primary'];
  }
}

export default theme;
