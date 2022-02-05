import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Spinner from './Spinner'
import { getFirestore } from "../firebase";
import { getDoc, doc} from "firebase/firestore";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(
        { id: '', title: '', description: '', price: '', pictureUrl: '' }
    )
    const { idItem } = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        const db = getFirestore()

        const ref = doc(db, 'items', idItem)

        getDoc(ref).then( querySnapshot => {
            setProducto({...querySnapshot.data(), id: querySnapshot.id})
        })
        setCargando(false)
    },[idItem])

    return (
        <div className='contenedorCentro marginTop'>
            <h2>Detalles del Producto</h2>
            { cargando ? <Spinner /> : <ItemDetail item={producto} /> }
        </div>
    )
}

export default ItemDetailContainer
