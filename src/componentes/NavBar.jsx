
import React from 'react'
import '../nav.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='caja-nav'>

      <ul className='barra-nav'>
        <li>
         <button  id='logo'><Link to={'/'}>audiofilia</Link></button>
          
        </li>
    
        <li className='boton-nav'>
        <Link className='link' to={'/microfonos'}>micrófonos</Link>
        </li>
        <li className='boton-nav'>
        <Link className='link' to={'/placas'}>placas</Link>
        </li>
        <li className='boton-nav'>
        <Link className='link' to={'/monitores'}>monitores</Link>
        </li>
        
      </ul>
      <CartWidget />
    </div>
  )
}
export default NavBar