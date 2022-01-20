import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({id, title, quantity, pictureUrl, total, description}) => {

    const { removeItem } = useCart()
  return <div id='cartItem'>
        <img src={pictureUrl} alt={title}/>

        <div>
            <h3>{title} x{quantity}</h3>
            <p>{description}</p>
            <strong>${total}</strong>
        </div>
        <button className='btn' onClick={() => removeItem(id)}>X</button>
    </div>
};

export default CartItem;
