import React, { useState, useEffect } from 'react'

function ProductLoadSuccess() {
    return (
        <div className= 'w-100 product_load_success_container'>
            <h5 className='text-center'>Producto cargado con éxito!</h5>
            <div className='product_load_selection w-100 d-flex flex-column'>
                <button type='button' className="btn btn-light border mb-2">Agregar otro producto</button>
                <button type='button' className="btn btn-dark">Continuar con la encuesta</button>
            </div>
        </div>
    )
}

export default ProductLoadSuccess
