import { Outlet } from 'react-router-dom';
import { ILayoutProps } from './types';

function Layout({ authenticated }: ILayoutProps) {
  return (
    <div>
      <h1>Layout, {authenticated ? 'true' : 'false'}</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
