import React, { useState, useEffect } from 'react'

function GenderSelection() {
    
    return (
        <div className='w-100 gender_selection'>
            <h5 className='text-center'>Seleccione el género</h5>
            
            <form action='#' className='d-flex flex-column w-100' id='gender_form'>
                <div className="btn-group m-3">
                   <input type="radio" className="btn-check" name='gender' id='mujer' autoComplete='off' />
                    <label className="btn btn-outline-dark" htmlFor="mujer">Mujer</label> 
                    <input type="radio" className="btn-check" name='gender' id='hombre' autoComplete='off' />
                    <label className="btn btn-outline-dark" htmlFor="hombre">Hombre</label>
                </div>
            </form>
        </div>
    )
}

export default GenderSelection