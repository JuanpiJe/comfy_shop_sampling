import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";

function ProductLoadSuccess() {
    return (
            <div className='w-100 product_load_success_container'>
                <h5 className='text-center'>Producto cargado con éxito!</h5>
                <div className='product_load_selection w-100 d-flex flex-column'>
                    <Link to='/category_selection' className="btn btn-light border mb-2">Agregar otro producto</Link>
                    <Link to='/user_email' className="btn btn-dark">Continuar con la encuesta</Link>
                </div>
            </div>
    )
}

export default ProductLoadSuccess