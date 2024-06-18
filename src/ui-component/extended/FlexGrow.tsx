import { Box, BoxProps } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export const sxFlex = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
} as const;

const FlexGrow = (props: BoxProps) => <Box sx={sxFlex} {...props} />;

export default FlexGrow;
