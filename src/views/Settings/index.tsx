import { useContext } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { UserContext } from 'context/UserContext';
import { SettingsHeader, SettingsItem } from './styles';

function Settings() {
  const { user, userLoading } = useContext(UserContext);

  if (userLoading || !user) return <CircularProgress />;

  return (
    <Box display="flex" flex="1" justifyItems="center" alignContent="center" flexWrap="wrap" sx={{ height: '100%' }}>
      <SettingsHeader>User info:</SettingsHeader>
      <SettingsItem>Username: {user.username}</SettingsItem>
      <SettingsItem>ID: {user.id}</SettingsItem>
      <SettingsItem>Movies notifications sent: {user.totalMovies}</SettingsItem>
    </Box>
  );
}

export default Settings;
