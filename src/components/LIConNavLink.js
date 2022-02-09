import React from 'react'
import { NavLink } from "react-router-dom";

const LIConNavLink = ({href, name}) => {
    return (
        <li>
            <NavLink to={href} className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>{name}</NavLink>
        </li>    
    )
}

export default LIConNavLink
