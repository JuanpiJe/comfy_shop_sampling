import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";

function GenderSelection() {

    return (
        <div className='w-100 gender_selection'>
            <h5 className='text-center'>Seleccione el género al que pertenecen los productos.</h5>

            <div className='d-flex flex-column w-100'>
                <div className="btn-group m-3">
                    <Link to='/category_selection' className="btn btn-outline-dark"  >
                        <input type="radio" className="btn-check" name='gender' id='mujer' autoComplete='off' />
                        <label htmlFor="mujer">Mujer</label>
                    </Link>
                    <Link to='/category_selection' className="btn btn-outline-dark"  >
                        <input type="radio" className="btn-check" name='gender' id='hombre' autoComplete='off' />
                        <label htmlFor="hombre">Hombre</label>
                    </Link>
                    <Link to='/category_selection' className="btn btn-outline-dark"  >
                        <input type="radio" className="btn-check" name='gender' id='hombre' autoComplete='off' />
                        <label htmlFor="hombre">Unisex</label>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GenderSelection