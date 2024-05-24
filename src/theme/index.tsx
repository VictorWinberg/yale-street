import { ThemeOptions, createTheme } from '@mui/material/styles';
import { svSE } from '@mui/material/locale';
import { svSE as dataGridSvSe } from '@mui/x-data-grid/locales';

// assets
import colors from '@/assets/scss/_themes-vars.module.scss';

// google-fonts
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

export interface ThemeOptionProps {
  colors: typeof colors;
  heading: string;
  paper: string;
  backgroundDefault: string;
  background: string;
  darkTextPrimary: string;
  darkTextSecondary: string;
  textDark: string;
  menuSelected: string;
  menuSelectedBack: string;
  divider: string;
}

/**
 * Represent theme style and structure as per Material-UI
 */
export default function theme() {
  const color = colors;

  const themeOption: ThemeOptionProps = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.primaryMain,
    menuSelectedBack: color.primaryLight,
    divider: color.grey200
  };

  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    mixins: {},
    components: componentStyleOverrides(themeOption),
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption)
  };

  return createTheme(themeOptions, svSE, dataGridSvSe);
}
