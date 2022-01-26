import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutSuccess from './CheckoutSuccess';

const Checkout = () => {
    const [finish, setFinish] = useState(false);
    const [idCompra, setIdCompra] = useState();
    const [buyer, setBuyer] = useState({name: '', phone: '', email: ''});
    const {cart, total} = useCart()

    const nameChange = (event) => {
        setBuyer({...buyer, name: event.target.value})
    }
    const phoneChange = (event) => {
        setBuyer({...buyer, phone: event.target.value})
    }
    const emailChange = (event) => {
        setBuyer({...buyer, email: event.target.value})
    }

    const finalizarCompra = (event) => {
        event.preventDefault()
        const date = new Date()
        const orderDate = date.toLocaleDateString()

        const order = {
            buyer: {
                name: buyer.name,
                phone: buyer.phone,
                email: buyer.email
            },
            items: cart,
            date: orderDate,
            total: total
        }

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')

        addDoc(ordersCollection, order).then( ({id}) => setIdCompra(id))
        setFinish(true)
    }


    return <div className='contenedorCentro'>
        
        
        {finish ? <CheckoutSuccess idCompra={idCompra}/> :
        <>
            <h2>Formulario de pago</h2>
            <form id='form'>

                <label>
                    <p>Nombre:</p>
                    <input type='text' value={buyer.name} onChange={nameChange}/>
                </label>

                <label>
                    <p>Telefono:</p>
                    <input type='tel' value={buyer.phone} onChange={phoneChange}/>
                </label>

                <label>
                    <p>E-mail:</p>
                    <input type='email' value={buyer.email} onChange={emailChange}/>
                </label>
                <br></br>
                <button className={'btn'} onClick={(event) => finalizarCompra(event)}>Finalizar Compra</button>   
                    
            </form>
        </>
        }
  </div>;
};

export default Checkout;
