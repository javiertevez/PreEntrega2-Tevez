


import '../App.css'
import React from 'react'
import { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import { getFilteredProducts, getProducts } from '../../asyncmock'
import { useParams } from 'react-router-dom'

function ItemListContainer({section}) {

const [products, setProducts] = useState([]);

const {productName} = useParams();

useEffect (() => {
  getProducts().then(response=> setProducts(section=='' ? response : response.filter(product=>product.section==section)))
}, [productName]);


  return (
    <section className='cardSection'>
      <h2 className='productos'>Productos</h2>
      <section className='cardSection2'>
      {products.map(product =><CardComponent key={product.id} product={product}/>)}



    </section>

    </section>

  )
}

export default ItemListContainer