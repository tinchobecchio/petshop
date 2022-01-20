import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, title, price, pictureUrl}) => {
    return (
        <div className='item'>
            <h3>#{id} - {title}</h3>
            <img src={pictureUrl} alt={title} />
            <strong>Precio: ${price}</strong>
            <Link to={`/item/${id}`}>Ver Detalles</Link>
        </div>
    )
}

export default Item
