import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { cyan, pink } from '@mui/material/colors';
import 'api/api';
import AuthContextProvider from 'context/AuthContext';
import GlobalStyles from './globalStyles';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

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
