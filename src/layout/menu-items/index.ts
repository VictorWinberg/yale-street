import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import { Icon } from '@tabler/icons-react';

// ==============================|| MENU ITEMS ||============================== //

export interface MenuItem {
  id: string;
  type: string;
  title?: string;
  caption?: string;
  url?: string;
  icon?: Icon;
  breadcrumbs?: boolean;
  target?: boolean;
  external?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
}

const menuItems: { items: MenuItem[] } = {
  items: [dashboard, pages, utilities, other]
};

export default menuItems;
