import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css'

function App() {

  return (

    <div className="wrapper">

      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />

      <Main />

    </div >

  )
}

export default App