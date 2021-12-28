import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(
        { id: '', title: '', description: '', price: '', pictureUrl: '' }
    )



    const getItem = () => {

        const getItemPromise = new Promise((res,rej) => {

            let item =  { id: 1, title: 'Gati', description: 'Sabor pescado 15kg ', price: '2800', pictureUrl: 'https://picsum.photos/300/300' }


            setTimeout(() => {
                res(item)

            }, 2000)

        })
        getItemPromise.then( i => setProducto(i))
    }

    useEffect(() => { getItem() }, [])

    return (
        <div className='contenedorCentro'>
            <h2>ItemDetail</h2>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer
