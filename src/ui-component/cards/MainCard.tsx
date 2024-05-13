import React from 'react';

// material-ui
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';

// project-import

// constant
const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 }
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

export interface MainCardProps extends CardProps {
  title?: string;
  border?: boolean;
  boxShadow?: boolean;
  children: React.ReactNode;
  cardContent?: boolean;
  darkTitle?: boolean;
  secondary?: React.ReactNode;
  shadow?: string | number;
  sx?: object;
}

const MainCard = React.forwardRef(
  (
    { border = false, boxShadow, children, cardContent = true, secondary, shadow, sx = {}, title, ...others }: MainCardProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          borderColor: 'divider',
          ':hover': {
            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
          },
          ...sx
        }}
      >
        {/* card header and action */}
        {title && <CardHeader sx={headerSX} title={title} action={secondary} />}

        {/* content & header divider */}
        {title && <Divider />}

        {/* card content */}
        {cardContent && <CardContent>{children}</CardContent>}
        {!cardContent && children}
      </Card>
    );
  }
);

export default MainCard;
