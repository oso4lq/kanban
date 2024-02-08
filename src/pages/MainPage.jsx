// Components
import Wrapper from '../components/Wrapper/Wrapper.jsx';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

// Data
import { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser.jsx';
import { useTasks } from '../hooks/useTasks.jsx';
import { useGlobal } from '../hooks/useGlobal.jsx';

// Styles
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

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header theme={theme} userData={userData} />
        <Main isLoaded={isLoaded} hasError={hasError} cardList={cards} />
      </Wrapper>
    </>
  )
}

export default MainPage