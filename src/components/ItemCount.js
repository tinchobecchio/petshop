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
        }
    }
    
    return (
        <div className='contenedorCentro itemCount'>

            <div className="contadorContenedor">
                <button onClick={restar}>-</button>
                <span>{cont}</span>
                <button onClick={sumar}>+</button>
            </div>

            <button className='btn' onClick={() => onAdd(cont)}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount
