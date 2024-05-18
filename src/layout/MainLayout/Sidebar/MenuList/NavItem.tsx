import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// project imports
import { MenuItem } from '@/layout/menu-items';
import { useAppStore } from '@/store';
import { SET_MENU } from '@/store/actions';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

interface NavItemProps {
  item: MenuItem;
  level: number;
}

const NavItem = ({ item, level }: NavItemProps) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [state, dispatch] = useAppStore();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const Icon = item.icon;
  const itemIcon = Icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: item.url === pathname ? 8 : 6,
        height: item.url === pathname ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  const LinkComponent: React.ElementType = forwardRef((props, ref: React.Ref<HTMLAnchorElement>) =>
    item.external ? (
      <a ref={ref} {...props} href={item.url} target={itemTarget} />
    ) : (
      <Link ref={ref} {...props} to={item.url ?? ''} target={itemTarget} />
    )
  );

  const onItemClick = () => {
    if (matchDownMd) {
      dispatch({ type: SET_MENU, payload: !state.opened });
    }
  };

  return (
    <ListItemButton
      component={LinkComponent}
      disabled={item.disabled}
      sx={{
        borderRadius: '12px',
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`
      }}
      selected={pathname.startsWith(item.url || '')}
      onClick={onItemClick}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography variant={item.url === pathname ? 'h5' : 'body1'} color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
};

export default NavItem;
