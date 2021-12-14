import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className='navbarContenedor'>
                <h1>PetShop</h1>
                <ul className="menu">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>Servicios</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </div>
        </div>

    )
}

export default NavBar
