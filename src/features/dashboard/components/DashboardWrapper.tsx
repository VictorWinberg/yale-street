import { Link, Outlet, useLocation } from 'react-router-dom';
import { Chip, Box, Typography, Grid, useTheme } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import FlexGrow from '@/ui-component/extended/FlexGrow';

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
  const theme = useTheme();

  const currentTab = tabItems.find((item) => pathname.startsWith(item.url)) || defaultTab;

  return (
    <FlexGrow>
      <Grid container alignItems="flex-start" justifyContent="space-between">
        <Grid item sm="auto">
          <Typography variant="h3" lineHeight={1.5} gutterBottom>
            {currentTab.title}
          </Typography>
        </Grid>
        <Grid item sm="auto">
          <PerfectScrollbar style={{ width: '100%', maxWidth: 'calc(100vw - 52px)', overflowX: 'hidden' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {tabItems.map((item) => (
                <Chip
                  key={item.id}
                  component={Link}
                  label={item.title}
                  to={item.url === currentTab.url ? defaultTab.url : item.url}
                  color="primary"
                  variant={pathname.startsWith(item.url) ? 'filled' : 'outlined'}
                  sx={{ borderColor: theme.palette.grey[200], px: 1, mb: 1 }}
                  clickable
                />
              ))}
            </Box>
          </PerfectScrollbar>
        </Grid>
      </Grid>
      <Outlet />
    </FlexGrow>
  );
};

export default DashboardWrapper;
