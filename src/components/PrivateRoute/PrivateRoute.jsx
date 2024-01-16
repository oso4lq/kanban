import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../lib/appRoutes';

function PrivateRoute({ children, isAuth }) {
  return isAuth ? children : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;