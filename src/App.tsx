import React, { useState, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AuthContext } from '@/contexts/AuthContext';
import Login from '@/views/Login';
import Dashboard from '@/views/Dashboard';
import PageFallback from '@/components/PageFallback';
import Layout from '@/components/Layout';
import FullPageLoader from '@/components/FullPageLoader';

function App() {
  const { authenticated, autoLoginFinished } = useContext(AuthContext);
  const [animationFinished, setAnimationFinished] = useState(false);

  const renderAuthorizedRoutes = () => (
    <>
      <Route
        index
        element={
          <ErrorBoundary FallbackComponent={PageFallback}>
            <Dashboard />
          </ErrorBoundary>
        }
      />
    </>
  );

  const renderUnauthorizedRoutes = () => (
    <>
      <Route
        index
        element={
          <ErrorBoundary FallbackComponent={PageFallback}>
            <Login />
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  );

  if (!autoLoginFinished || !animationFinished) {
    return <FullPageLoader visible={!autoLoginFinished} onAnimationFinished={setAnimationFinished} />;
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout authenticated={authenticated} />}>
          {authenticated ? renderAuthorizedRoutes() : renderUnauthorizedRoutes()}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
