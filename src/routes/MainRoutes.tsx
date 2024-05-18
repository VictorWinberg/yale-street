import { lazy } from 'react';

// project imports
import MainLayout from '@/layout/MainLayout';
import Loadable from '@/ui-component/Loadable';
import { Navigate } from 'react-router-dom';

// dashboard routing
const DashboardWrapper = Loadable(lazy(() => import('@/views/dashboard')));
const Dashboard = Loadable(lazy(() => import('@/views/dashboard/Dashboard')));
const Assignments = Loadable(lazy(() => import('@/views/dashboard/Assignments')));
const Contacts = Loadable(lazy(() => import('@/views/dashboard/Contacts')));
const Companies = Loadable(lazy(() => import('@/views/dashboard/Companies')));
const Seeking = Loadable(lazy(() => import('@/views/dashboard/Seeking')));
const Reports = Loadable(lazy(() => import('@/views/dashboard/Reports')));
const Leads = Loadable(lazy(() => import('@/views/dashboard/Leads')));

// main routing
const Mailing = Loadable(lazy(() => import('@/views/mailing')));
const Results = Loadable(lazy(() => import('@/views/results')));
const Organization = Loadable(lazy(() => import('@/views/organization')));
const Modules = Loadable(lazy(() => import('@/views/modules')));

// other routing
const Settings = Loadable(lazy(() => import('@/views/settings')));
const Account = Loadable(lazy(() => import('@/views/account')));
const Help = Loadable(lazy(() => import('@/views/help')));

// dev routing
const Dev = Loadable(lazy(() => import('@/views/dev')));
const UtilsTypography = Loadable(lazy(() => import('@/views/dev/utils/Typography')));
const UtilsColor = Loadable(lazy(() => import('@/views/dev/utils/Color')));
const UtilsShadow = Loadable(lazy(() => import('@/views/dev/utils/Shadow')));
const SamplePage = Loadable(lazy(() => import('@/views/dev/SamplePage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <Navigate to="/dashboard" />
    },
    {
      path: 'dashboard',
      element: <DashboardWrapper />,
      children: [
        {
          path: '',
          element: <Dashboard />
        },
        {
          path: 'assignments',
          element: <Assignments />
        },
        {
          path: 'contacts',
          element: <Contacts />
        },
        {
          path: 'companies',
          element: <Companies />
        },
        {
          path: 'seeking',
          element: <Seeking />
        },
        {
          path: 'reports',
          element: <Reports />
        },
        {
          path: 'leads',
          element: <Leads />
        }
      ]
    },
    {
      path: 'mailing',
      element: <Mailing />
    },
    {
      path: 'results',
      element: <Results />
    },
    {
      path: 'organization',
      element: <Organization />
    },
    {
      path: 'modules',
      element: <Modules />
    },
    {
      path: 'settings',
      element: <Settings />
    },
    {
      path: 'my-account',
      element: <Account />
    },
    {
      path: 'help',
      element: <Help />
    },
    {
      path: 'dev',
      children: [
        {
          path: '',
          element: <Dev />
        },
        {
          path: 'util-typography',
          element: <UtilsTypography />
        },
        {
          path: 'util-color',
          element: <UtilsColor />
        },
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        }
      ]
    }
  ]
};

export default MainRoutes;
