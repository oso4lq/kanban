import { Outlet, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';

// Pages
import { AppRoutes } from './lib/appRoutes';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from './pages/NotFoundPage';
import ExitPage from './pages/ExitPage';
import CardBrowsePage from './pages/CardPage';

// Styles
//import './App.css'
import { GlobalStyle } from './Global/Global.styled.js';
import { GlobalStyleALL } from './components/GlobalALL/GlobalALL.styled.js';
import { lightTheme, darkTheme, GlobalStyleLightDark, ThemeProvider } from './components/Themes/ThemesLightDark.styled.js';

function App() {

  const [userData, setUserData] = useState(null);

  // Toggle theme function
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      //console.log('dark theme');
    } else {
      setTheme('light');
      //console.log('light theme');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <GlobalStyleALL />
      <GlobalStyleLightDark />

      <Routes>

        <Route path={AppRoutes.HOME} element={<PrivateRoute isAuth={userData}> <Outlet />  </PrivateRoute>}>
          <Route index element={<MainPage userData={userData} />} />
          <Route path={`${AppRoutes.CARD}/:id`} element={<CardBrowsePage />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage />} />
          <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        </Route>

        <Route path={AppRoutes.LOGIN} element={<LoginPage setUserData={setUserData} />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />

      </Routes>

    </ThemeProvider>
  )
}

export default App