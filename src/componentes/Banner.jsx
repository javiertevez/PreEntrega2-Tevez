import React from 'react'
import '../App.css'
import { useState } from 'react'

function BannerLogo() {

// const [valor, botonPresionado] = useState(false);



  return (
    <div className='banner'>
      <h1 className='titulo'>audiofilia</h1>
    <p className='subtitulo'>audio profesional</p>
    <p className='subtitulo'>al alcance de tu mano</p>
    <a className='ver-productos' href="">ver productos</a>
    </div>
  )
}

export default BannerLogo