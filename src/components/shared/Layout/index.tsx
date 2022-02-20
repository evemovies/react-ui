import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Box, Drawer, List, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, AddBox, SettingsApplications } from '@mui/icons-material';
import sidebarBackground from 'assets/sidebar-background.png';
import { ILayoutProps, IMenuItem } from './types';
import { StyledListItemButton } from './styles';

const drawerWidth = '300px';

function Layout({ authenticated }: ILayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: IMenuItem[] = [
    { title: 'Dashboard', icon: <Dashboard />, url: '/' },
    { title: 'Add movie', icon: <AddBox />, url: '/add-movie' },
    { title: 'Settings', icon: <SettingsApplications />, url: '/settings' },
  ];

  const drawerMenu = () =>
    menuItems.map(item => (
      <StyledListItemButton key={item.title} selected={item.url === location.pathname} onClick={() => navigate(item.url)}>
        <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </StyledListItemButton>
    ));

  const renderDrawerMenu = () => {
    return (
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{ position: 'fixed', width: drawerWidth }}
        PaperProps={{
          sx: {
            width: drawerWidth,
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${sidebarBackground}) center center`,
            backgroundSize: 'cover',
          },
        }}
      >
        <Box sx={{ mt: '30px', width: '100%', textAlign: 'center', fontSize: '25px', color: '#fff', fontWeight: 'bold' }}>EveMovies</Box>
        <List>{drawerMenu()}</List>
      </Drawer>
    );
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ ml: drawerWidth, width: `100% - ${drawerWidth}`, height: '100%' }}
      >
        <Outlet />
        {authenticated && renderDrawerMenu()}
      </Box>
    </React.Fragment>
  );
}

export default Layout;
