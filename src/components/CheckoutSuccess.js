import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutSuccess = ({idCompra}) => {

    const {clear} = useCart()

    return <div className='contenedorCentro checkoutSuc'>
        <h2>¡Tu compra ha sido procesada correctamente!</h2>
        <p>En breve recibirás un correo con más información.</p>
        <strong>Codigo de seguimiento: {idCompra}</strong>
        <br/>
        <Link to={'/'}>
            <button className='btn' onClick={clear}>Volver a la tienda</button>
        </Link>
    </div>;
};

export default CheckoutSuccess;
