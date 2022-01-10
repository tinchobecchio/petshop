import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import LIConLink from './LIConLink'




const NavBar = () => {

    const itemsMenu = [
        {name: 'Perros', href: '/category/perros'},
        {name: 'Gatos', href: '/category/gatos'},
    ]

    return (
        <div className="navbar">
            <div className='navbarContenedor'>
                
                <Link to='/' className='brandTitle'>
                    <h1 >PetShop</h1>
                </Link>
                <ul className="menu">
                    { itemsMenu.map(i => <LIConLink name={i.name} href={i.href} key={i.name} /> ) }
                    <li>
                        <Link to={'/cart'}><CartWidget /></Link>    
                    </li>
                </ul>
                
            </div>
        </div>

    )
}

export default NavBar
