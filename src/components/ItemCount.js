import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [cont, setCont] = useState(initial)

    const restar = () => {
        if(cont > 1) {
          setCont( cont - 1)  
        }     
    }

    const sumar = () => {
        if(cont < stock) {
            setCont( cont + 1)
        }  else {alert(`Stock disponible ${stock}`)}
    }
    
    return (
        <div className='contenedorCentro'>
            <p>Alimento Balanceado</p>

            <div id="contadorContenedor">
                <button onClick={restar}>-</button>
                <span>{cont}</span>
                <button onClick={sumar}>+</button>
            </div>

            <button onClick={onAdd(cont)}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount
