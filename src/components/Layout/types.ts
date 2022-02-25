import { ReactElement } from 'react';

export interface ILayoutProps {
  authenticated: boolean;
}

export interface IMenuItem {
  title: string;
  icon: ReactElement;
  url: string;
}
