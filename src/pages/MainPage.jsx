// Components
import Wrapper from '../components/Wrapper/Wrapper.jsx';
//import PopExit from '../components/PopExit/PopExit';
// import PopNewCard from '../components/PopNewCard/PopNewCard';
//import PopBrowse from '../components/PopBrowse/PopBrowse';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

// Data
import { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser.jsx';
import { useTasks } from '../hooks/useTasks.jsx';
import { useGlobal } from '../hooks/useGlobal.jsx';
//import { cardList } from '../data';

// Styles
// import './App.css'
// import { GlobalStyleALL } from '../components/GlobalALL/GlobalALL.styled.js';
// import { lightTheme, darkTheme, GlobalStyleLightDark, ThemeProvider } from '../components/Themes/ThemesLightDark.styled.js';
import { GlobalStyle } from '../Global/Global.styled.js';

import { getTasks } from '../api.js';


function MainPage() {

  const { userData } = useUser();
  const { returnTask } = useTasks();

  const { theme } = useGlobal();
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  //  Loader
  const [cards, setCards] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    getTasks({ token: userData.token })
      .then((data) => {
        returnTask(data);
        console.log(data.tasks);
        setCards(data.tasks);
      })
      .then(() => {
        setIsLoaded(false);
      })
      .catch((error) => {
        setHasError(true);
        console.error(error);
      });
  }, []);

  // Toggle theme function
  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //     //console.log('dark theme');
  //   } else {
  //     setTheme('light');
  //     //console.log('light theme');
  //   }
  // };

  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    //   <GlobalStyleLightDark />
    <>

      <GlobalStyle />

      <Wrapper>
        {/* <PopNewCard /> */}
        {/* <Header toggleTheme={toggleTheme} theme={theme} userData={userData} /> */}
        <Header theme={theme} userData={userData} />
        <Main isLoaded={isLoaded} hasError={hasError} cardList={cards} />
      </Wrapper>

    </>

    // </ThemeProvider>
  )
}

export default MainPage