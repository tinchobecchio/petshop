import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

const Spinner = () => {
    return (
        <div className='contenedorCentro'>
            <FontAwesomeIcon icon={faSpinner} spin size='3x' style={{"marginTop": '100px'}}/>
            <h2>Cargando...</h2>
        </div>
    )
}

export default Spinner
