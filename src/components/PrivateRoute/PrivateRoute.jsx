import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from '../../lib/appRoutes';
import { useUser } from '../../hooks/useUser';

function PrivateRoute() {
  const {userData} = useUser();
  console.log(userData);
  return userData ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;