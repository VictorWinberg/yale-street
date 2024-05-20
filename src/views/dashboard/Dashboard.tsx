import React from 'react';

// material-ui
import { Box, Grid, GridProps } from '@mui/material';
import Typography from '@mui/material/Typography';

// project imports

// assets
import { IconArrowNarrowUp } from '@tabler/icons-react';

// ==============================|| DASHBOARD PAGE ||============================== //

const Dashboard = () => (
  <Grid
    container
    columnSpacing={3}
    sx={{
      mt: 2,
      '& > .MuiGrid-item': {
        pb: 3,
        pr: 3,
        borderLeft: '0.5px solid',
        borderBottom: '0.5px solid',
        '&:first-child': { borderLeft: 'none' },
        borderColor: 'grey.200'
      }
    }}
  >
    <Grid item xs={12} md={6} lg={8}>
      <GraphCard
        header="Pågående uppdrag"
        sub={
          <>
            <span style={{ color: 'green' }}>
              <IconArrowNarrowUp size={16} style={{ verticalAlign: 'middle' }} />
              2.1%
            </span>{' '}
            mot samma månad 2023
          </>
        }
        lastUpdated="Senast uppdaterad: 2024-02-26"
      />
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <GraphCard header="Leads" lastUpdated="From 1-6 Dec, 2020" />
    </Grid>
  </Grid>
);

interface GraphCardProps extends GridProps {
  header: string;
  sub?: React.ReactNode;
  lastUpdated?: string;
}

const GraphCard = ({ header, sub, lastUpdated, ...rest }: GraphCardProps) => (
  <>
    <Grid container justifyContent="space-between" alignItems="baseline" spacing={1} {...rest}>
      <Grid item>
        <Typography variant="body1">{header}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{sub}</Typography>
      </Grid>
      <Grid item flexGrow={1} />
      <Grid item>
        <Typography variant="body2">{lastUpdated}</Typography>
      </Grid>
    </Grid>
    <Box
      sx={{
        mt: 1,
        borderRadius: '20px',
        bgcolor: 'grey.50',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 1
      }}
    >
      <Typography variant="body1">Placeholder</Typography>
    </Box>
  </>
);

export default Dashboard;
