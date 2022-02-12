import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid, Drawer, List, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, AddBox, SettingsApplications } from '@mui/icons-material';
import sidebarBackground from 'assets/sidebar-background.png';
import { StyledListItemButton } from './styles';

interface ILayoutProps {
  authenticated: boolean;
}

function Layout({ authenticated }: ILayoutProps) {
  const menuItems = [
    { title: 'Dashboard', icon: <Dashboard /> },
    { title: 'Add movie', icon: <AddBox /> },
    { title: 'Settings', icon: <SettingsApplications /> },
  ];
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(menuItems[0].title);

  const drawerMenu = () =>
    menuItems.map(item => (
      <StyledListItemButton key={item.title} selected={item.title === selectedMenuItem} onClick={() => setSelectedMenuItem(item.title)}>
        <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </StyledListItemButton>
    ));

  return (
    <React.Fragment>
      <Grid container alignItems="center" justifyContent="center" sx={{ width: '100%', height: '100%' }}>
        <Outlet />
      </Grid>
      <Drawer
        anchor="left"
        variant="permanent"
        PaperProps={{
          sx: {
            width: '300px',
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${sidebarBackground}) center center`,
            backgroundSize: 'cover',
          },
        }}
      >
        <Box sx={{ mt: '30px', width: '100%', textAlign: 'center', fontSize: '25px', color: '#fff', fontWeight: 'bold' }}>EveMovies</Box>
        <List>{drawerMenu()}</List>
      </Drawer>
    </React.Fragment>
  );
}

export default Layout;
