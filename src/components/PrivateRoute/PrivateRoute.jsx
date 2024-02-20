import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from '../../lib/appRoutes';
import { useUser } from '../../hooks/useUser';

function PrivateRoute() {
  const { userData } = useUser();
  return userData ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;