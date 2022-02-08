import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import 'api/api';
import AuthContextProvider from 'context/AuthContext';
import GlobalStyles from './globalStyles';
import App from './App';

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
