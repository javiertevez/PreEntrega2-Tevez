import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import '../styles/detail.css'

function CardDetail() {

  const { productName } = useParams();
  const [p, setP] = useState([])

  const products = useContext(ProductContext);


  useEffect(() => {
    const foundP = products.filter(prod => prod.name === productName);
    setP(foundP[0] || null)
  }, [products])



  return (
    <section className='detail-section'>
      <div className='product-detail-box'>

        <div className='img-box'>
          <img className='img-detail' src={p.img} alt="" />
        </div>
        <div className='text-section'>
          <h1 className='title'>{productName}</h1>
          <div className='description-box'>
            <p>{p.description}</p>
          </div>
          <div className='price-box'>
            <p>${p.price}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CardDetail