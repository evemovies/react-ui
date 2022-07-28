import { Outlet } from 'react-router-dom';
import { ILayoutProps } from './types';
import s from './style.module.scss';

function Layout({ authenticated }: ILayoutProps) {
  console.log(authenticated);
  return (
    <div className={s.container}>
      <Outlet />
    </div>
  );
}

export default Layout;
