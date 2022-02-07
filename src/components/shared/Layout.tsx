import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

interface ILayoutProps {
  authenticated: boolean;
}

function Layout({ authenticated }: ILayoutProps) {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ width: '100%', height: '100%' }}>
      {/*<div>Hello, {authenticated ? 'user' : 'unknown'}</div>*/}
      <Outlet />
    </Grid>
  );
}

export default Layout;
