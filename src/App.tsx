import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Login from '@/views/Login';
import Dashboard from '@/views/Dashboard';
import PageFallback from '@/components/PageFallback';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          index
          element={
            <ErrorBoundary FallbackComponent={PageFallback}>
              <Login />
            </ErrorBoundary>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ErrorBoundary FallbackComponent={PageFallback}>
              <Dashboard />
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
