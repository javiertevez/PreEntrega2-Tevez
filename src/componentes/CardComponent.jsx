import React, { useEffect, useState } from 'react'
import { getFilteredProducts } from '../../asyncmock'
import './card.css'

function CardComponent({product}) {

const {name, price, img} = product;



  return (
    <>
    
  
    <div className='card'>
      <img className='image' src={img} alt="" />
      <p className='text'>{name}</p>
      <p className='text'>{price}</p>
    </div>
    
    
    </>
  )
}

export default CardComponent