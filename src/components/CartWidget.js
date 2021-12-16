import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div style={{fontSize: '1.2em'}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span> 4</span>
        </div>
    )
}

export default CartWidget
