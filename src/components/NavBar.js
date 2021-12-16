import React from 'react'
import CartWidget from './CartWidget'
import LIConLink from './LIConLink'



const NavBar = () => {

    const itemsMenu = [
        {name: 'Home', href: '#'},
        {name: 'Productos', href: '#'},
        {name: 'Servicios', href: '#'},
        {name: 'Contacto', href: '#'}
    ]

    return (
        <div className="navbar">
            <div className='navbarContenedor'>
                
                <h1>PetShop</h1>
                <ul className="menu">
                    { itemsMenu.map(i => <LIConLink name={i.name} href={i.href} /> ) }
                    <li><CartWidget /></li>
                </ul>
                
            </div>
        </div>

    )
}

export default NavBar
