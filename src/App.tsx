import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Register from './components/Auth/Register/Register';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Register /> },

  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;