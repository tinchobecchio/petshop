import React from 'react'
import { Link } from "react-router-dom";

const LIConLink = ({href, name}) => {
    return (
        <li><Link to={href}>{name}</Link></li>    
    )
}

export default LIConLink
