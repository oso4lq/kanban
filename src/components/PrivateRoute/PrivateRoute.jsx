import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from '../../lib/appRoutes';

function PrivateRoute({ children, isAuth }) {
  return isAuth ? children : <Navigate to={AppRoutes.LOGIN} />;
  //return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;