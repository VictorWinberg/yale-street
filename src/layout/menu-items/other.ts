// assets
import { IconSettings, IconUser, IconHelp } from '@tabler/icons-react';
import { MenuItem } from '.';

// constant
const icons = { IconSettings, IconUser, IconHelp };

// ==============================|| OTHER MENU ITEMS ||============================== //

const other: MenuItem = {
  id: 'other',
  title: 'Annat',
  type: 'group',
  children: [
    {
      id: 'settings',
      title: 'Inställningar',
      type: 'item',
      url: '/settings',
      icon: icons.IconSettings,
      breadcrumbs: false
    },
    {
      id: 'account',
      title: 'Mitt konto',
      type: 'item',
      url: '/my-account',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'help',
      title: 'Hjälp',
      type: 'item',
      url: '/help',
      icon: icons.IconHelp,
      breadcrumbs: false
    }
  ]
};

export default other;
