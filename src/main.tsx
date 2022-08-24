import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from '@/contexts/AuthContext';
import UserContext from '@/contexts/UserContext';
import MovieContext from '@/contexts/MoviesContext';
import App from './App';
// import 'antd/dist/antd.variable.css';
import 'antd/dist/antd.css';
import 'normalize.css/normalize.css';
import './style.scss';

const AppContexts = ({ children }: React.PropsWithChildren) => (
  <AuthContextProvider>
    <UserContext>
      <MovieContext>{children}</MovieContext>
    </UserContext>
  </AuthContextProvider>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContexts>
        <App />
      </AppContexts>
    </BrowserRouter>
  </React.StrictMode>
);
