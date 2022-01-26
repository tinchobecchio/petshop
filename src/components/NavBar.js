import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartWidget from './CartWidget'
import LIConLink from './LIConLink'
import {getFirestore} from '../firebase'
import {getDocs, collection} from 'firebase/firestore'

const NavBar = () => {
    
    const [categories, setCategories] = useState([]);
    const {cart} = useCart()
    
    useEffect(() => {
      
        const db = getFirestore()
    
        getDocs(collection(db, "categorias"))
        .then((snapshot) => setCategories(snapshot.docs.map((doc) => doc.data())))
        
    }, []);
    
    return (
        <div className="navbar">
            <div className='navbarContenedor'>
                
                <Link to='/' className='brandTitle'> <h1>PetShop</h1> </Link>                    
                
                <ul className="menu">
                    {categories.map(i => <LIConLink name={i.name} href={i.href} key={i.key} /> )}
                    {cart.length !== 0 ? <li><Link to={'/cart'}><CartWidget /></Link></li> : <li></li>}
                </ul>
                
            </div>
        </div>

    )
}

export default NavBar
