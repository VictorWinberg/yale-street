import { lazy } from 'react';

// project imports
import MainLayout from '@/layout/MainLayout';
import Loadable from '@/ui-component/Loadable';
import { Navigate } from 'react-router-dom';

// dashboard routing
const DashboardWrapper = Loadable(lazy(() => import('@/features/dashboard/components/DashboardWrapper')));
const DashboardPage = Loadable(lazy(() => import('@/features/dashboard/pages/DashboardPage')));
const AssignmentsPage = Loadable(lazy(() => import('@/features/assignments/pages/AssignmentsPage')));
const NewAssignment = Loadable(lazy(() => import('@/features/assignments/components/NewAssignment')));
const ContactsPage = Loadable(lazy(() => import('@/features/contacts/pages/ContactsPage')));
const NewContact = Loadable(lazy(() => import('@/features/contacts/components/NewContact')));
const CompaniesPage = Loadable(lazy(() => import('@/features/companies/pages/CompaniesPage')));
const NewCompany = Loadable(lazy(() => import('@/features/companies/components/NewCompany')));
const Seeking = Loadable(lazy(() => import('@/dummy-views/seeking/Seeking')));
const NewSeeking = Loadable(lazy(() => import('@/dummy-views/seeking/NewSeeking')));
const Reports = Loadable(lazy(() => import('@/dummy-views/reports/Reports')));
const Leads = Loadable(lazy(() => import('@/dummy-views/leads/Leads')));

// main routing
const Mailing = Loadable(lazy(() => import('@/dummy-views/mailing/Mailing')));
const Results = Loadable(lazy(() => import('@/dummy-views/results/Results')));
const Organization = Loadable(lazy(() => import('@/dummy-views/organization/Organization')));
const Modules = Loadable(lazy(() => import('@/dummy-views/modules/Modules')));

// other routing
const Settings = Loadable(lazy(() => import('@/dummy-views/settings/Settings')));
const Account = Loadable(lazy(() => import('@/dummy-views/account/Account')));
const Help = Loadable(lazy(() => import('@/dummy-views/help/Help')));

// dev routing
const DevPage = Loadable(lazy(() => import('@/features/dev/pages/DevPage')));
const TypographyPage = Loadable(lazy(() => import('@/features/dev/pages/TypographyPage')));
const ColorPage = Loadable(lazy(() => import('@/features/dev/pages/ColorPage')));
const ShadowPage = Loadable(lazy(() => import('@/features/dev/pages/ShadowPage')));
const SamplePage = Loadable(lazy(() => import('@/features/dev/pages/SamplePage')));

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
          element: <DashboardPage />
        },
        {
          path: 'assignments',
          children: [
            {
              path: '',
              element: <AssignmentsPage />
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
              element: <ContactsPage />
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
              element: <CompaniesPage />
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
          path: 'sample',
          element: <DevPage />
        },
        {
          path: 'util-typography',
          element: <TypographyPage />
        },
        {
          path: 'util-color',
          element: <ColorPage />
        },
        {
          path: 'util-shadow',
          element: <ShadowPage />
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
