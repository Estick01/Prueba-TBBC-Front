import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/login/Login';
import ContactList from './components/Contact/contactList';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Login/> },
    { path: 'register', element: <Register /> },
    { path: 'contacts',element: <ContactList /> },

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