import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    return (
        <div className='item'>
            <h3>#{item.id} - {item.title}</h3>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.description}</p>
            <strong>Precio: ${item.price}</strong>
            <ItemCount stock={5} initial={1} onAdd={(cant) => {alert(`Has agregado ${cant} items al carrito.`)}}/>
        </div>
    )
}

export default ItemDetail
