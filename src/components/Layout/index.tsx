import React, { useContext } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Box, Drawer, List, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, AddBox, SettingsApplications, Logout } from '@mui/icons-material';
import { AuthContext } from 'context/AuthContext';
import sidebarBackground from 'assets/sidebar-background.png';
import { ILayoutProps, IMenuItem } from './types';
import { StyledListItemButton, StyledLogoutButton } from './styles';

const drawerWidth = '300px';

function Layout({ authenticated }: ILayoutProps) {
  const { logoutUser } = useContext(AuthContext);
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
        sx={{ width: drawerWidth }}
        PaperProps={{
          sx: {
            width: drawerWidth,
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${sidebarBackground}) center center`,
            backgroundSize: 'cover',
          },
        }}
      >
        <Box sx={{ mt: '30px', width: '100%', textAlign: 'center', fontSize: '25px', color: '#fff', fontWeight: 'bold' }}>EveMovies</Box>
        <List sx={{ position: 'relative', height: '100%' }}>
          {drawerMenu()}
          <StyledLogoutButton onClick={logoutUser}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </StyledLogoutButton>
        </List>
      </Drawer>
    );
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        sx={{ ml: drawerWidth, width: 'calc(100% - 300px)', minHeight: '100%' }}
      >
        <Outlet />
        {authenticated && renderDrawerMenu()}
      </Box>
    </React.Fragment>
  );
}

export default Layout;
