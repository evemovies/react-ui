import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { AuthContext } from 'context/AuthContext';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import AddMovie from 'views/AddMovie';
import Settings from 'views/Settings';
import Movie from 'views/Movie';
import Layout from 'components/shared/Layout';

function App() {
  const { authenticated, autoLoginFinished } = useContext(AuthContext);

  function renderInitialLoader() {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!autoLoginFinished) return renderInitialLoader();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout authenticated={authenticated} />}>
          <Route index element={authenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
