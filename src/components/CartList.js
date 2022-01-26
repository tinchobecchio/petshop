import React from 'react';
import CartItem from './CartItem';

const CartList = ({cart}) => {
  
  return <div id='cartList'>
      {cart.map(i => <CartItem key={i.id} id={i.id} title={i.title} quantity={i.quantity} pictureUrl={i.pictureUrl} total={i.total} description={i.description}/>)}
  </div>;
};

export default CartList;
