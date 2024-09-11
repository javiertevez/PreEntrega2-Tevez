
import './App.css'
import NavBar from './componentes/NavBar'
import Banner from './componentes/Banner'
import CartWidget from './componentes/CartWidget'

function App() {
  return (
  
      <div className='main'>
        <nav>
          <NavBar/>
       <CartWidget />
        </nav>
       
       <Banner />
      </div>
   
  )
}

export default App
