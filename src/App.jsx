// Components
import Wrapper from './components/Wrapper/Wrapper.jsx';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

// Data
import { useEffect, useState } from 'react';
import { cardList } from './data';

// Styles
//import './App.css'
import { GlobalStyle } from './Global/Global.styled.js';
import { GlobalStyleALL } from './components/GlobalALL/GlobalALL.styled.js';
import { Button } from './components/Button/Button.styled.js';
import { lightTheme, darkTheme, GlobalStyleLightDark, ThemeProvider } from './components/Themes/ThemesLightDark.styled.js';

function App() {

  // Loader
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000)
  }, []);

  //new Date()

  // Add card function
  const [cards, setCards] = useState(cardList);
  const addCard = () => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: 'No theme',
        title: 'No name',
        date: '26.12.23',
        status: 'No status',
      }
    ])
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
      <GlobalStyle />
      <GlobalStyleALL />
      <GlobalStyleLightDark />

      <Button>press me</Button>
      <Button $transparent>press me</Button>

      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} toggleTheme={toggleTheme} />
        <Main isLoaded={isLoaded} cardList={cards} />
      </Wrapper>

    </ThemeProvider>

  )
}

export default App