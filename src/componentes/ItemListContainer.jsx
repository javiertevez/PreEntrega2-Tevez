


import '../App.css'
import React from 'react'
import { useEffect, useState } from 'react'

function ItemListContainer() {

 const [products, setProducts] = useState([]);

useEffect(()=>{
  fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then(data => setProducts(data))
  .catch(error => console.log(error))
  .finally(()=>console.log('Petición finalizada'))
},[])




  return (
    <section>
{products.map(product=><p key={product.id}>{product.title}</p>)}



    </section>
    
  )
}

export default ItemListContainer