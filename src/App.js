import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './pages/AdminRoutes';
import ClientRoutes from './pages/ClientRoutes';
import ClientLayout from './pages/client/ClientLayout';
import AdminLayout from './pages/admin/AdminLayout';
function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        {Object.values(ClientRoutes).map((route, index) => {
          return (
            <Route key={index} path={route.pattern} element={route.component} />
          );
        })}
      </Route>{' '}
      <Route path="/admin" element={<AdminLayout />}>
        {Object.values(AdminRoutes).map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
