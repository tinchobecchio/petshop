import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({item, valid}) => {
    const [mostrar, setMostrar] = useState(true)
    const {addItem} = useCart()
    
    const onAdd = (cant) => {
        setMostrar(false)
        if(cant > 0) {
            addItem(item, cant)
        }
    }

    return (
        <>
            { valid ? 
            
            <div className='item'>
                <h3>{item.title}</h3>
                <img src={item.pictureUrl} alt={item.title} />
                <p>{item.description}</p>
                <strong>Precio: ${item.price}</strong>

                { mostrar 
                ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> 

                : <div className='itemDetailBtns'>

                    <Link style={{padding: 0}} to={'/cart'}>
                        <button className='btn'>Ir al carrito</button>
                    </Link>

                    <button className='btn' onClick={() => setMostrar(true)}>Volver</button>
                </div>
                }
                
            </div>

            :   <div className='contenedorCentro'>
                    <h3>¡Vaya! El item que buscas no existe.</h3><br/>
                    <Link to={'/'}>
                        <button className='btn'>Volver a la tienda</button>
                    </Link>
                </div>

            }
        
        

        </>
    )
}

export default ItemDetail
