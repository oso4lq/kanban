import { Outlet, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// Pages
import { AppRoutes } from './lib/appRoutes';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from './pages/NotFoundPage';
import ExitPage from './pages/ExitPage';
import CardBrowseEditPage from './pages/CardBrowseEditPage.jsx';
import AddCardPage from './pages/AddCardPage.jsx';

// Styles
// import './App.css'
import Layout from './components/Layout/Layout.jsx';

function App() {

  return (
    <Layout>
      <Routes>

        <Route path={AppRoutes.HOME} element={<PrivateRoute> <Outlet />  </PrivateRoute>}>
          <Route index element={<MainPage />} />
          <Route path={`${AppRoutes.CARD}/:id`} element={<CardBrowseEditPage />} />
          <Route path={AppRoutes.ADD_CARD} element={<AddCardPage />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage />} />
        </Route>

        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />

        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />

      </Routes>
    </Layout>
  )
}

export default App