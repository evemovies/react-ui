import { useContext } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Drawer, Menu } from 'antd';
import { AppstoreFilled, PlusSquareFilled, SettingFilled } from '@ant-design/icons';
import cn from 'classnames';
import { AuthContext } from '@/contexts/AuthContext';
import s from './style.module.scss';

function Layout() {
  const location = useLocation();
  const { authenticated, logoutUser } = useContext(AuthContext);

  const menuItems = [
    {
      label: (
        <Link to="/">
          <AppstoreFilled />
          <span>Dashboard</span>
        </Link>
      ),
      key: 'dashboard',
    },
    {
      label: (
        <Link to="/add-movie">
          <PlusSquareFilled />
          <span>Add movie</span>
        </Link>
      ),
      key: 'add-movie',
    },
    {
      label: (
        <Link to="/settings">
          <SettingFilled />
          <span>Settings</span>
        </Link>
      ),
      key: 'settings',
    },
  ];

  return (
    <div className={cn(s.container, authenticated && s.containerAuthenticated)}>
      <Drawer className={s.drawer} visible={authenticated} closable={false} placement="left" mask={false}>
        <Menu className={s.menu} items={menuItems} mode="inline" defaultSelectedKeys={[location.pathname.slice(1) || 'dashboard']}></Menu>
      </Drawer>
      <Outlet />
    </div>
  );
}

export default Layout;
