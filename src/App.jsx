import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css'
import { useEffect, useState } from 'react';
import { cardList } from './data';

function App() {

  const [cards, setCards] = useState(cardList);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000)
  }, []);

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: 'Web Design',
        title: 'Task name 1',
        date: '26.12.23',
        status: 'No status',
      }
    ])
  }

  return (

    <div className="wrapper">

      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header addCard={addCard} />

      <Main isLoaded={isLoaded} cardList={cards} />

    </div >

  )
}

export default App