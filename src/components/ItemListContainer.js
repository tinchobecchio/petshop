import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
// import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    const getProducts = () => {

        const ObtenerListado = new Promise((res, rej) => {

            const lista = [
                { id: 1, title: 'Gati', description: 'Sabor pescado 15kg ', price: '2800', pictureUrl: 'https://picsum.photos/300/300' },
                { id: 2, title: 'Dogui', description: 'Sabor carne 15kg ', price: '2500', pictureUrl: 'https://picsum.photos/300/300' },
                { id: 3, title: 'DogSelection', description: 'Sabor carne y pollo 21kg ', price: '3200', pictureUrl: 'https://picsum.photos/300/300' },
                { id: 4, title: 'CatSelection', description: 'Sabor pescado 15kg ', price: '2300', pictureUrl: 'https://picsum.photos/300/300' },
                { id: 5, title: 'DogChow', description: 'Sabor carne 21kg ', price: '3900', pictureUrl: 'https://picsum.photos/300/300' },
                { id: 6, title: 'Sieger', description: 'Sabor pollo 21kg ', price: '4100', pictureUrl: 'https://picsum.photos/300/300' }
            ]
    
            setTimeout(() => {
                res(lista)
            }, 2000);
        } )

        ObtenerListado.then( prods => setProductos(prods))
        
    }

    useEffect(() => {
        getProducts()
    }, [])

    
    return (
        <div className='contenedorCentro'>
            <h1 style={{textAlign: 'center'}}>{greeting}</h1>
            {/* <ItemCount stock={5} initial={1} onAdd={(cant) => {alert(`Has agregado ${cant} items al carrito.`)}}/> */}

            <ItemList items={productos} />
        </div>
    )
}

export default ItemListContainer
