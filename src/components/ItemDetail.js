import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
const [cantidad, setCantidad] = useState()
const [mostrar, setMostrar] = useState(true)

    
    const onAdd = (cant) => {
        setCantidad(cant)
        setMostrar(false)
    }

    useEffect(() => {
        const agregarAlCarrito = () => {
            if(cantidad !== undefined) {
                console.log(item.title + ' ' + cantidad)
            }
        }

        agregarAlCarrito()
    }, [item, cantidad])

    return (
        <div className='item'>
            <h3>#{item.id} - {item.title}</h3>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.description}</p>
            <strong>Precio: ${item.price}</strong>
            { mostrar 
            ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> 
            : <div style={{display: "flex", flexDirection: "column", justifyContent: "spaceBetween", padding: "15px"}}>
                <Link style={{padding: 0}} to={'/cart'}>
                    <button className='btnAgregarCarrito'>Terminar compra</button>
                </Link>
                <button className='btnAgregarCarrito' onClick={() => setMostrar(true)}>Volver</button>
            </div>
            }
            
        </div>
    )
}

export default ItemDetail
