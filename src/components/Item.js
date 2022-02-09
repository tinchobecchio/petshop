import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, title, price, pictureUrl}) => {
    return (
        <div className='item'>
            <h3>{title}</h3>
            <div className='imgContainer'>
                <img src={pictureUrl} alt={title} />
            </div>
            <strong>Precio: ${price}</strong>
            <Link to={`/item/${id}`}>
                <button className='btn'>Ver Detalles</button>
            </Link>
        </div>
    )
}

export default Item
