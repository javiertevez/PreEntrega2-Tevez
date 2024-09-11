
import React from 'react'
import '../nav.css'


const NavBar = () => {
  return (
    <div className='caja-nav'>

      <ul className='barra-nav'>
        <li>
          <a  id='logo' href="">audiofilia</a>
        </li>
        <li className='boton-nav'>
          <a className='link' href="">inicio</a>
        </li>
        <li className='boton-nav'>
          <a className='link' href="">productos</a>
        </li>
        <li className='boton-nav'>
          <a className='link' href="">nosotros</a>
        </li>
        <li className='boton-nav'>
          <a className='link' href="">contactanos</a>
        </li>
        
      </ul>
    </div>
  )
}
export default NavBar