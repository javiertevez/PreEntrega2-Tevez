import '../App.css'
import React from 'react'

function ItemListContainer({greeting}) {
  return (
    <div><h2 className='saludo'>{greeting}</h2></div>
  )
}

export default ItemListContainer