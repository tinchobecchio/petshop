import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'
import CartEmpty from './CartEmpty';
import CartList from './CartList';

const Cart = () => {

    const {cart, total} = useCart()

    return (
        <div className='contenedorCentro padBot'>
            <h1>Mi Carrito</h1>
            {cart.length === 0 
            ? <CartEmpty /> 
            : <>
                <CartList cart={cart} />
                <h2>Total a pagar: ${total}</h2>
                <Link to={'/checkout'}>
                    <button className={'btn'}>Continuar compra</button>
                </Link>
            </>}
        </div>
    )
}

export default Cart
