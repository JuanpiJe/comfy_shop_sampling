import React, { useState, useEffect } from 'react'

function CategorySelection() {
    return (
        <div className='category_search w-100'> 
            <div className='input_container'>
                <h5 className='text-center'>Ingrese la <strong>categoría y marca </strong> del producto</h5>
                <input type="text" id='search' className='form-control mt-3' placeholder='Ej. Remera Ralph Lauren' />
            </div>
            <div className="match-list list-group w-100 mt-2">
                {/* AGREGAR ACTIVE CUANDO ES SELECCIONADO */}
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                <button type="button" className='mt-2 mb-2 text-center list-group-item list-group-item-action border'>Remera Polo Ralph Lauren</button>
                
            </div>
        </div>

    )
}

export default CategorySelection