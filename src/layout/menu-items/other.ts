// assets
import { IconBrandChrome, IconHelp, IconNote } from '@tabler/icons-react';
import { MenuItem } from '.';

// constant
const icons = { IconBrandChrome, IconHelp, IconNote };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other: MenuItem = {
  id: 'sample-docs-roadmap',
  title: 'Sample Docs',
  type: 'group',
  children: [
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'collapse',
      icon: icons.IconNote,

      children: [
        {
          id: 'default',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          icon: icons.IconBrandChrome,
          breadcrumbs: true
        },
        {
          id: 'documentation',
          title: 'Documentation',
          type: 'item',
          url: 'https://codedthemes.gitbook.io/berry/',
          icon: icons.IconHelp,
          external: true,
          target: true
        }
      ]
    }
  ]
};

export default other;
