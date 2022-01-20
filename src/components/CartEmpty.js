import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
    
  return <div className='contenedorCentro'>
        <h3>El carrito está vacío.</h3>
        <Link to={'/'}>
            <button className='btn'>Volver a la tienda</button>
        </Link>
  </div>
}

export default CartEmpty;
