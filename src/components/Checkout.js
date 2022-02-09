import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutSuccess from './CheckoutSuccess';

const Checkout = () => {
    const [finish, setFinish] = useState(false);
    const [idCompra, setIdCompra] = useState();
    const [buyer, setBuyer] = useState({name: '', phone: '', email: ''});
    const [emailValid, setEmailValid] = useState(false);
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

    let email
    const emailChange2 = (event) => {
        email = event.target.value
        email === buyer.email ? setEmailValid(true) : setEmailValid(false);
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
            total: total,
            estado: 'generada'
        }

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')

        addDoc(ordersCollection, order).then( ({id}) => setIdCompra(id))
        setFinish(true)
    }

    return <div className='contenedorCentro marginTop'>
        
        
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

                <label>
                    <p>Vuelva a ingresar su E-mail:</p>
                    <input type='email' value={email} onChange={emailChange2}/>
                </label>
                <br></br>

                {emailValid ? 
                    <button className={'btn'} onClick={(event) => finalizarCompra(event)}>Realizar Compra</button>
                    : <i>Ingrese sus datos correctamente para finalizar la compra.</i>   
                }
                   
                    
            </form>
        </>
        }
  </div>;
};

export default Checkout;
