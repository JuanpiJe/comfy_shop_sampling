import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function SizeSelection() {
    return (
        <div className='w-100 d-flex flex-column align-items-center'>
            <h6 className='mb-4'>Tu encuesta fue registrada con éxito!</h6>
            <FontAwesomeIcon icon={faCheckCircle} style={{ 'font-size': '70px', 'color': 'green' }} />
            <p className='text-center mt-4 mb-4'>Nos comunicaremos a tu correo con los resultados del sorteo.</p>
            <button type="button" className='btn btn-dark align-self-stretch'>Volver al menu principal</button>
        </div>
    )
}

export default SizeSelection