// Components
import Wrapper from '../components/Wrapper/Wrapper.jsx';
//import PopExit from '../components/PopExit/PopExit';
import PopNewCard from '../components/PopNewCard/PopNewCard';
//import PopBrowse from '../components/PopBrowse/PopBrowse';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

// Data
import { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser.jsx';
import { useTasks } from '../hooks/useTasks.jsx';
//import { cardList } from '../data';

// Styles
//import './App.css'
// import { GlobalStyle } from '../Global/Global.styled.js';
// import { GlobalStyleALL } from '../components/GlobalALL/GlobalALL.styled.js';
import { lightTheme, darkTheme, GlobalStyleLightDark, ThemeProvider } from '../components/Themes/ThemesLightDark.styled.js';
import { addTask, getTasks } from '../api.js';


function MainPage() {

  const {userData} = useUser();

  const [cards, setCards] = useState(null);

  // Loader
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    getTasks({ token: userData.token })
      .then((data) => {
        // console.log(data.tasks);
        setCards(data.tasks);
      })
      .then(() => {
        setIsLoaded(false);
      })
  }, []);

  // Add card function
  const addCard = async () => {

    let currentDate = new Date();
    console.log(currentDate);

    let newCard = {
      title: "New task",
      topic: "Research",
      status: "Без статуса",
      description: "No description",
      date: currentDate,
    }

    await addTask({ token: userData.token, title: newCard.title, topic: newCard.topic, status: newCard.status, description: newCard.description, date: newCard.date })
    
    getTasks({ token: userData.token })
      .then((data) => {
        setCards(data.tasks);
      })

  };

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


  // Rendering
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyleLightDark />

      <Wrapper>
        {/* userName={userName} userEMail={userEMail} */}
        <PopNewCard />
        <Header addCard={addCard} toggleTheme={toggleTheme} theme={theme} userData={userData} />
        <Main isLoaded={isLoaded} cardList={cards} />
      </Wrapper>

    </ThemeProvider>
  )
}

export default MainPage