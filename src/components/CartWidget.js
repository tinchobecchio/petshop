import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext'


const CartWidget = () => {
    const {cantItems} = useCart()
    return (
        <div style={{fontSize: '1.2em'}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span> {cantItems} </span>
        </div>
    )
}

export default CartWidget
