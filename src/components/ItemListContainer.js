import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {


    const agregado = (cant) => {
        alert(`Has agregado ${cant} items al carrito.`)
    }

    return (
        <div className='contenedorCentro'>
            <h1 style={{textAlign: 'center'}}>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={agregado}/>
        </div>
    )
}

export default ItemListContainer
