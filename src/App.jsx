import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// Pages
import { AppRoutes } from './lib/appRoutes';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from './pages/NotFoundPage';
import ExitPage from './pages/ExitPage';
import CardBrowsePage from './pages/CardPage';
import Layout from './components/Layout/Layout';

function App() {

  const isAuth = true;

  return (
    <Routes>

      <Route path={AppRoutes.HOME} element={<PrivateRoute isAuth={isAuth}> <Layout />  </PrivateRoute>}>
        <Route index element={<MainPage />} />
        <Route path={AppRoutes.CARD} element={<CardBrowsePage />} />
        <Route path={AppRoutes.EXIT} element={<ExitPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Route>

      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />

    </Routes>
  )
}

export default App