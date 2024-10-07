
import './App.css';
import NavBar from './componentes/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/homeView/HomeView';
import MonitoresView from './views/MonitoresView/MonitoresView'
import PlacasView from './views/PlacasView/PlacasView'
import MicrofonosView from './views/MicrofonosView/MicrofonosView'

function App() {


  return (

    

      <BrowserRouter>
        <nav>
          <NavBar />
        </nav>
        
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/monitores/:productName' element={<MonitoresView />} />
          <Route exact path='/monitores/' element={<MonitoresView />} />
          <Route exact path='/placas/:productName' element={<PlacasView />} />
          <Route exact path='/placas/' element={<PlacasView />} />
          <Route exact path='/microfonos/:productName' element={<MicrofonosView />} />
          <Route exact path='/microfonos/' element={<MicrofonosView />} />
        </Routes>
          
       
      </BrowserRouter>



    

  )
}

export default App

