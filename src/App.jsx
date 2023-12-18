import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import RenderHeader from './components/RenderHeader/RenderHeader';
import RenderMain from './components/RenderMain/RenderMain';

import './App.css'

function App() {

  return (
    <>

      <div className="wrapper">

        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <RenderHeader />
        <RenderMain />

      </div>


    </>
  )
}

export default App
