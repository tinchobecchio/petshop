import React from 'react'
import { useCart } from '../context/CartContext'
import CartEmpty from './CartEmpty';
import CartList from './CartList';

const Cart = () => {

    const {cart, total} = useCart()

    console.log(cart);
    
    return (
        <div className='contenedorCentro'>
            <h1>Mi Carrito</h1>
            {cart.length === 0 ? <CartEmpty /> : <><CartList cart={cart} /><h2>Total a pagar: ${total}</h2></>}
            
        </div>
    )
}

export default Cart
