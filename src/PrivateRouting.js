import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = () => {
  const isAuthenticated = () => {
    // Replace this with your authentication logic
    console.log("Enter the log");
    return Cookies.get('token') !== undefined;
  };

  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
