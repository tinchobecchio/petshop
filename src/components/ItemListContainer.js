import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Spinner from './Spinner'


const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const { idCategory } = useParams()
    const [cargando, setCargando] = useState(true)


    useEffect(() => {

        const getProducts = () => {
            setCargando(true)
            const ObtenerListado = new Promise((res, rej) => {
    
                const lista = [
                    { id: 1, title: 'Gati', description: 'Sabor pescado 15kg ', price: 2800, stock: 12, category: 'gatos', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 2, title: 'Dogui', description: 'Sabor carne 15kg ', price: 2500, stock: 25, category: 'perros', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 3, title: 'DogSelection', description: 'Sabor carne y pollo 21kg ', price: 3200, stock: 33, category: 'perros', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 4, title: 'CatSelection', description: 'Sabor pescado 15kg ', price: 2300, stock: 27, category: 'gatos', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 5, title: 'DogChow', description: 'Sabor carne 21kg ', price: 3900, stock: 18, category: 'perros', pictureUrl: 'https://picsum.photos/300/300' },
                    { id: 6, title: 'Sieger', description: 'Sabor pollo 21kg ', price: 4100, stock: 13, category: 'perros', pictureUrl: 'https://picsum.photos/300/300' }
                ]
        
                setTimeout(() => {
                    res(lista)
                }, 2000);
            } )
    
            ObtenerListado.then( prods => {
                if(idCategory !== undefined) {
                    const categoriaFiltrada = prods.filter((item) => item.category === idCategory)
                    setProductos(categoriaFiltrada)
                } else {
                    setProductos(prods)
                }
            })
            .finally(() => setCargando(false))
        }

        getProducts()
    }, [idCategory])

    
    return (
        <div className='contenedorCentro'>
            <h1 style={{textAlign: 'center'}}>{greeting}</h1>
            { cargando ? <Spinner /> : <ItemList items={productos} /> }
        </div>
    )
}

export default ItemListContainer
