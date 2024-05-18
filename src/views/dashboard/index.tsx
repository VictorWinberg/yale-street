import { Link, Outlet, useLocation } from 'react-router-dom';
import { Chip, Box, Typography, Grid, Divider } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

type TabItem = {
  id: string;
  title: string;
  url: string;
};

const defaultTab: TabItem = { id: 'dashboard', title: 'Dashboard', url: '/dashboard' };

const tabItems: TabItem[] = [
  { id: 'assignments', title: 'Uppdrag', url: '/dashboard/assignments' },
  { id: 'contacts', title: 'Kontakter', url: '/dashboard/contacts' },
  { id: 'companies', title: 'Bolag', url: '/dashboard/companies' },
  { id: 'seeking', title: 'Söker', url: '/dashboard/seeking' },
  { id: 'reports', title: 'Rapport', url: '/dashboard/reports' },
  { id: 'leads', title: 'Leads', url: '/dashboard/leads' }
];

const DashboardWrapper = () => {
  const { pathname } = useLocation();

  const currentTab = tabItems.find((item) => item.url === pathname) || defaultTab;

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container alignItems="flex-end" justifyContent="space-between">
        <Grid item sm="auto">
          <Typography variant="h4" gutterBottom>
            {currentTab.title}
          </Typography>
        </Grid>
        <Grid item sm="auto">
          <PerfectScrollbar style={{ width: '100%', maxWidth: 'calc(100vw - 52px - 32px)', overflowX: 'hidden' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {tabItems.map((item) => (
                <Chip
                  key={item.id}
                  component={Link}
                  label={item.title}
                  to={item.url === currentTab.url ? defaultTab.url : item.url}
                  color="secondary"
                  variant={item.url === pathname ? 'filled' : 'outlined'}
                  clickable
                />
              ))}
            </Box>
          </PerfectScrollbar>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1.25 }} />
      <Outlet />
    </Box>
  );
};

export default DashboardWrapper;
