// assets
import { IconDashboard, IconMail, IconMessageCircle, IconUser, IconSettings } from '@tabler/icons-react';
import { MenuItem } from '.';

// constant
const icons = { IconDashboard, IconMail, IconMessageCircle, IconUser, IconSettings };

// ==============================|| MAIN MENU ITEMS ||============================== //

const main: MenuItem = {
  id: 'main',
  title: 'Meny',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'mailing',
      title: 'Utskick',
      type: 'item',
      url: '/mailing',
      icon: icons.IconMail,
      breadcrumbs: false
    },
    {
      id: 'results',
      title: 'Resultat',
      type: 'item',
      url: '/results',
      icon: icons.IconMessageCircle,
      breadcrumbs: false
    },
    {
      id: 'organization',
      title: 'Organisation',
      type: 'item',
      url: '/organization',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'modules',
      title: 'Moduler',
      type: 'item',
      url: '/modules',
      icon: icons.IconSettings,
      breadcrumbs: false
    }
  ]
};

export default main;
