import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const [mostrar, setMostrar] = useState(true)
    const {addItem} = useCart()
    

    const onAdd = (cant) => {
        setMostrar(false)
        if(cant > 0) {
            addItem(item, cant)
        }
    }

    return (
        <div className='item'>
            <h3>{item.title}</h3>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.description}</p>
            <strong>Precio: ${item.price}</strong>

            { mostrar 
            ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> 

            : <div style={{display: "flex", flexDirection: "column", justifyContent: "spaceBetween", padding: "15px"}}>

                <Link style={{padding: 0}} to={'/cart'}>
                    <button className='btn'>Terminar compra</button>
                </Link>

                <button className='btn' onClick={() => setMostrar(true)}>Volver</button>
            </div>
            }
            
        </div>
    )
}

export default ItemDetail
