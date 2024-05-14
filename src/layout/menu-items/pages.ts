// assets
import { IconKey } from '@tabler/icons-react';
import { MenuItem } from '.';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages: MenuItem = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/pages/login',
          target: true
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          url: '/pages/register',
          target: true
        }
      ]
    }
  ]
};

export default pages;
