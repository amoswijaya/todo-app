import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return <div>{children}</div>;
};
