import { PaletteColor, PaletteColorOptions, PaletteOptions } from '@mui/material';

import { ThemeOptionProps } from '.';

/**
 * Color intention that you want to used in your theme
 */
export default function themePalette(theme: ThemeOptionProps): PaletteOptions {
  return {
    common: {
      black: theme.colors?.darkPaper
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark
    },
    orange: {
      light: theme.colors?.orangeLight,
      main: theme.colors?.orangeMain,
      dark: theme.colors?.orangeDark
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark
    },
    success: {
      light: theme.colors?.successLight,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: theme.textDark
    },
    text: {
      primary: theme.darkTextPrimary,
      secondary: theme.darkTextSecondary
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault
    }
  };
}

declare module '@mui/material/styles' {
  interface Palette {
    orange: PaletteColor;
  }

  interface PaletteOptions {
    orange?: PaletteColorOptions;
  }
}
