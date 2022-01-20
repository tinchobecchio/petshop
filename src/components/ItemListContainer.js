import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Spinner from './Spinner'
import {getFirestore} from '../firebase'
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const { idCategory } = useParams()
    const [cargando, setCargando] = useState(true)


    useEffect( () => {
        const db = getFirestore()
        setCargando(true)
        
        const  getProducts = async() => {

            const myItems = idCategory 
                ? query(collection(db, 'items'), where('category', '==', idCategory)) 
                : collection(db, 'items')
        
            const querySnapshot = await getDocs(myItems)
    
            setProductos(querySnapshot.docs.map( el => {
                return {...el.data(), id: el.id}
            }))
        
            setCargando(false)
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
