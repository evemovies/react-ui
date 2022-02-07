import React, { useContext } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Grid, CircularProgress } from '@mui/material';
import { AuthContext } from 'context/AuthContext';
import Login from 'views/login/Login';
import Dashboard from 'views/dashboard/Dashboard';
import Layout from 'components/shared/Layout';

function App() {
  const navigate = useNavigate();
  const { authenticated, autoLoginFinished } = useContext(AuthContext);

  function renderInitialLoader() {
    return (
      <Grid container alignItems="center" direction="row" justifyContent="center" sx={{ height: '100%' }}>
        <CircularProgress />
      </Grid>
    );
  }

  if (!autoLoginFinished) return renderInitialLoader();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout authenticated={authenticated} />}>
          <Route index element={authenticated ? <Navigate to="/login" /> : <Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
