import '../styles/cart.css'
import React from 'react'

function CartWidget() {
    return (
        <div className='caja-carrito'>
            <img className='carrito' src="https://p7.hiclipart.com/preview/1022/32/945/shopping-cart-logo-icon-shopping-cart.jpg" alt="carrito" />
            <p className='numero-carrito'>2</p>
        </div>
    )
}

export default CartWidget