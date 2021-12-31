import React from 'react'

const Item = ({id, title, price, pictureUrl}) => {
    return (
        <div className='item'>
            <h3>#{id} - {title}</h3>
            <img src={pictureUrl} alt={title} />
            <strong>Precio: ${price}</strong>
            <a href={`/item/${id}`}>Ver Detalles</a>
        </div>
    )
}

export default Item
