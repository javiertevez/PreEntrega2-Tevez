
import './App.css'
import NavBar from './componentes/NavBar'
import Banner from './componentes/Banner'
import CartWidget from './componentes/CartWidget'
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  return (

    <div className='main'>
      <nav>
        <NavBar />
        <CartWidget />
      </nav>
      <ItemListContainer greeting="bienvenido!" />

      <Banner />
    </div>

  )
}

export default App
