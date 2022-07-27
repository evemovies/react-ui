import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from '@/contexts/AuthContext';
import App from './App';
import 'antd/dist/antd.css';

const AppContexts = ({ children }: React.PropsWithChildren) => <AuthContextProvider>{children}</AuthContextProvider>;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContexts>
        <App />
      </AppContexts>
    </BrowserRouter>
  </React.StrictMode>
);
