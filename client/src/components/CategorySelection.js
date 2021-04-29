import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";

function CategorySelection() {
    return (
        <div className='category_search w-100'> 
            <div className='input_container'>
                <h5 className='text-center'>Ingrese la <strong>categoría y marca </strong> del producto</h5>
                <input type="text" id='search' className='form-control mt-3' placeholder='Ej. Remera Ralph Lauren' />
            </div>
            <div className="match-list list-group w-100 mt-2">
                {/* AGREGAR ACTIVE CUANDO ES SELECCIONADO */}
                <Link to='/size_selection' className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>
                Lorem, ipsum dolor.
                </Link>
                <Link to='/size_selection' className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>
                Lorem, ipsum dolor.
                </Link>
                <Link to='/size_selection' className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>
                Lorem, ipsum dolor.
                </Link>
            </div>
        </div>

    )
}

export default CategorySelection