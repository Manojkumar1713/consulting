import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from './services/auth';

const PrivateRoute = ({ children }) => {
  const user = getUser();
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
