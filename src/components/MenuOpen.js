import React from 'react';
import CartWidget from './CartWidget'
import LIConNavLink from './LIConNavLink'
import { NavLink } from 'react-router-dom'


export const MenuOpen = ({categories, cart, handleClick}) => {

  return <>
    <ul className="menu" onClick={() => handleClick()}>
        <li>
          <NavLink to={'/cart'} className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }>
            <CartWidget length={cart.length}/>
          </NavLink>
        </li>
        {categories.map(i => <LIConNavLink name={i.name} href={i.href} key={i.key} /> )}
                    
    </ul>
  </>;
};
