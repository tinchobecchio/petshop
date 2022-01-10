import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Spinner from './Spinner'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(
        { id: '', title: '', description: '', price: '', pictureUrl: '' }
    )
    const { idItem } = useParams()
    const [cargando, setCargando] = useState(true)


    useEffect(() => { 
        
        const getProducts = () => {

            const ObtenerListado = new Promise((res, rej) => {

                const lista = [
                    { id: 1, title: 'Gati', description: 'Sabor pescado 15kg ', price: '2800', stock: 12, category: 'gatos', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 2, title: 'Dogui', description: 'Sabor carne 15kg ', price: '2500', stock: 25, category: 'perros', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 3, title: 'DogSelection', description: 'Sabor carne y pollo 21kg ', price: '3200', stock: 33, category: 'perros', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 4, title: 'CatSelection', description: 'Sabor pescado 15kg ', price: '2300', stock: 27, category: 'gatos', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 5, title: 'DogChow', description: 'Sabor carne 21kg ', price: '3900', stock: 18, category: 'perros', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 6, title: 'Sieger', description: 'Sabor pollo 21kg ', price: '4100', stock: 13, category: 'perros', pictureUrl: 'https://picsum.photos/300/300' }
                ]
        
                setTimeout(() => {
                    res(lista)
                }, 2000);
            } )

            ObtenerListado.then( prods => {
                const itemBuscado = prods.find(item => item.id === parseInt(idItem))
                setProducto(itemBuscado)
            })
            .finally(() => setCargando(false))
        }
        
        
        getProducts() }
    
    
    , [idItem])
    
    return (
        <div className='contenedorCentro'>
            <h2>Detalles del Producto</h2>
            { cargando ? <Spinner /> : <ItemDetail item={producto} /> }
        </div>
    )
}

export default ItemDetailContainer
