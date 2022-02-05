import React from 'react';
import CartWidget from './CartWidget'
import LIConLink from './LIConLink'
import { Link } from 'react-router-dom'


export const MenuOpen = ({categories, cart, handleClick}) => {

  return <>
    <ul className="menu" onClick={() => handleClick()}>
        <li><Link to={'/cart'}><CartWidget length={cart.length}/></Link></li>
        {categories.map(i => <LIConLink name={i.name} href={i.href} key={i.key} /> )}
                    
    </ul>
  </>;
};
