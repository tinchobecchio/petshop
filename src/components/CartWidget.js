import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext'

const CartWidget = ({length}) => {
    const {cantItems} = useCart()
    return (
        <div style={{fontSize: '1.2em'}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            { length > 0 ? <span> {cantItems} </span> : ''}
        </div>
    )
}

export default CartWidget
