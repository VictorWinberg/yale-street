import React from 'react';

// material-ui
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// ==============================|| CUSTOM SUB CARD ||============================== //

interface SubCardProps extends CardProps {
  title: string;
  children: React.ReactNode;
}

const SubCard = React.forwardRef(({ title, children, ...others }: SubCardProps, ref: React.Ref<HTMLDivElement>) => {
  const defaultShadow = '0 2px 14px 0 rgb(32 40 45 / 8%)';

  return (
    <Card ref={ref} sx={{ border: '1px solid', borderColor: 'divider', ':hover': { boxShadow: defaultShadow } }} {...others}>
      {/* card header and action */}
      {title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} />}

      {/* content & header divider */}
      {title && <Divider />}

      {/* card content */}
      <CardContent sx={{ p: 2.5 }}>{children}</CardContent>
    </Card>
  );
});

export default SubCard;
