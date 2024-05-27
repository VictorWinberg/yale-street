import { lazy } from 'react';

// project imports
import MainLayout from '@/layout/MainLayout';
import Loadable from '@/ui-component/Loadable';
import { Navigate } from 'react-router-dom';

// dashboard routing
const DashboardWrapper = Loadable(lazy(() => import('@/views/dashboard')));
const Dashboard = Loadable(lazy(() => import('@/views/dashboard/Dashboard')));
const Assignments = Loadable(lazy(() => import('@/views/dashboard/assignments/Assignments')));
const NewAssignment = Loadable(lazy(() => import('@/views/dashboard/assignments/NewAssignment')));
const Contacts = Loadable(lazy(() => import('@/views/dashboard/contacts/Contacts')));
const NewContact = Loadable(lazy(() => import('@/views/dashboard/contacts/NewContact')));
const Companies = Loadable(lazy(() => import('@/views/dashboard/companies/Companies')));
const NewCompany = Loadable(lazy(() => import('@/views/dashboard/companies/NewCompany')));
const Seeking = Loadable(lazy(() => import('@/views/dashboard/seeking/Seeking')));
const NewSeeking = Loadable(lazy(() => import('@/views/dashboard/seeking/NewSeeking')));
const Reports = Loadable(lazy(() => import('@/views/dashboard/reports/Reports')));
const Leads = Loadable(lazy(() => import('@/views/dashboard/leads/Leads')));

// main routing
const Mailing = Loadable(lazy(() => import('@/views/mailing/Mailing')));
const Results = Loadable(lazy(() => import('@/views/results/Results')));
const Organization = Loadable(lazy(() => import('@/views/organization/Organization')));
const Modules = Loadable(lazy(() => import('@/views/modules/Modules')));

// other routing
const Settings = Loadable(lazy(() => import('@/views/settings/Settings')));
const Account = Loadable(lazy(() => import('@/views/account/Account')));
const Help = Loadable(lazy(() => import('@/views/help/Help')));

// dev routing
const Dev = Loadable(lazy(() => import('@/views/dev/Dev')));
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
          children: [
            {
              path: '',
              element: <Assignments />
            },
            {
              path: 'new',
              element: <NewAssignment />
            }
          ]
        },
        {
          path: 'contacts',
          children: [
            {
              path: '',
              element: <Contacts />
            },
            {
              path: 'new',
              element: <NewContact />
            }
          ]
        },
        {
          path: 'companies',
          children: [
            {
              path: '',
              element: <Companies />
            },
            {
              path: 'new',
              element: <NewCompany />
            }
          ]
        },
        {
          path: 'seeking',
          children: [
            {
              path: '',
              element: <Seeking />
            },
            {
              path: 'new',
              element: <NewSeeking />
            }
          ]
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
