import React from 'react'

const LIConLink = ({href, name}) => {
    return (
        <div>
            <li><a href={ href }>{name}</a></li>
        </div>
    )
}

export default LIConLink
