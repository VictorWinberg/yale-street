import { TypographyOptions, TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { ThemeOptionProps } from '.';
import { headerHeight } from '@/store/constant';

/**
 * Typography used in theme
 */
export default function themeTypography(theme: ThemeOptionProps): TypographyOptions {
  return {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: '2.125rem',
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.5
    },
    h2: {
      fontSize: '1.5rem',
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.5
    },
    h3: {
      fontSize: '1.25rem',
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.5
    },
    h4: {
      fontSize: '1rem',
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.5
    },
    h5: {
      fontSize: '0.875rem',
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.5
    },
    h6: {
      fontSize: '0.75rem',
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.5
    },
    subtitle1: {
      fontSize: '0.875rem',
      color: theme.textDark,
      fontWeight: 500,
      lineHeight: 1.5
    },
    subtitle2: {
      fontSize: '0.75rem',
      color: theme.darkTextSecondary,
      fontWeight: 400,
      lineHeight: 1.5
    },
    caption: {
      fontSize: '0.75rem',
      color: theme.darkTextSecondary,
      fontWeight: 400,
      lineHeight: 1.5
    },
    body1: {
      fontSize: '0.875rem',
      color: theme.darkTextPrimary,
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.75rem',
      color: theme.darkTextSecondary,
      fontWeight: 400,
      lineHeight: 1.5
    },
    button: {
      textTransform: 'capitalize'
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: 23,
        left: 0,
        '&[data-shrink="false"]': {
          top: 5
        }
      },
      '& > div > input': {
        padding: '30.5px 14px 11.5px !important'
      },
      '& legend': {
        display: 'none'
      },
      '& fieldset': {
        top: 0
      }
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: `calc(100vh - ${headerHeight + 2}px)`,
      flexGrow: 1,
      marginTop: `${headerHeight}px`,
      padding: '40px'
    },
    menuCaption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.heading,
      padding: '6px',
      textTransform: 'capitalize',
      marginTop: '10px'
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      color: theme.darkTextSecondary,
      textTransform: 'capitalize'
    },
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px'
    },
    smallAvatar: {
      width: '22px',
      height: '22px',
      fontSize: '1rem'
    },
    mediumAvatar: {
      width: '34px',
      height: '34px',
      fontSize: '1.2rem'
    },
    largeAvatar: {
      width: '44px',
      height: '44px',
      fontSize: '1.5rem'
    }
  };
}

declare module '@mui/material' {
  interface TypographyPropsVariantOverrides {
    customInput: true;
    mainContent: true;
    menuCaption: true;
    subMenuCaption: true;
    commonAvatar: true;
    smallAvatar: true;
    mediumAvatar: true;
    largeAvatar: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    customInput: TypographyStyleOptions;
    mainContent: TypographyStyleOptions;
    menuCaption: TypographyStyleOptions;
    subMenuCaption: TypographyStyleOptions;
    commonAvatar: TypographyStyleOptions;
    smallAvatar: TypographyStyleOptions;
    mediumAvatar: TypographyStyleOptions;
    largeAvatar: TypographyStyleOptions;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    customInput?: TypographyStyleOptions;
    mainContent?: TypographyStyleOptions;
    menuCaption?: TypographyStyleOptions;
    subMenuCaption?: TypographyStyleOptions;
    commonAvatar?: TypographyStyleOptions;
    smallAvatar?: TypographyStyleOptions;
    mediumAvatar?: TypographyStyleOptions;
    largeAvatar?: TypographyStyleOptions;
  }
}
