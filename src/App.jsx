import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import RenderHeader from './components/RenderHeader/RenderHeader';

//import RenderMain from './components/RenderMain/RenderMain';

import ColumnNoStatus from './components/Columns/ColumnNoStatus';
import ColumnToDo from './components/Columns/ColumnToDo';
import ColumnInProcess from './components/Columns/ColumnInProcess';
import ColumnTesting from './components/Columns/ColumnTesting';
import ColumnReady from './components/Columns/ColumnReady';

import './App.css'

function App() {

  return (
    <>

      <div className="wrapper">

        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <RenderHeader />

        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                <ColumnNoStatus />
                <ColumnToDo />
                <ColumnInProcess />
                <ColumnTesting />
                <ColumnReady />
              </div>
            </div>
          </div>
        </main >


      </div >

    </>
  )
}

export default App
