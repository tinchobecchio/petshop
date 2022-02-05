import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import {getFirestore} from '../firebase'
import {getDocs, collection} from 'firebase/firestore'
import { MenuButton } from './MenuButton'
import { MenuOpen } from './MenuOpen'

const NavBar = () => {
    
    const [categories, setCategories] = useState([]);
    const {cart} = useCart()
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
      
        const db = getFirestore()
    
        getDocs(collection(db, "categorias"))
        .then((snapshot) => setCategories(snapshot.docs.map((doc) => doc.data())))
        
    }, []);
    
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="navbar">
            <div className='navbarContenedor'>
                
                <Link to='/' className='brandTitle'> <h1>PetShop</h1> </Link> 
                { open ?
                    <>
                        <MenuButton open={open} handleClick={handleClick}/>
                        <MenuOpen categories={categories} cart={cart} handleClick={handleClick}/>
                    </>
                :   <MenuButton open={open} handleClick={handleClick}/>
                }                   
                
            </div>
        </div>

    )
}

export default NavBar
