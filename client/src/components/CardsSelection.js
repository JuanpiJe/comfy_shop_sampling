import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";

function CardsSelection() {
    return (
        <div className='cards-selection-form'>
            <div className='d-flex flex-column mb-3 align-items-center'>
                <h5>¿Que forma tiene tu abdomen?</h5>
                <small>Selecciona la imagen más descriptiva.</small>
            </div>
            <div class="card-group row gap-2 ">
                <Link to='/product_feedback' class="card col p-2 border op-1 text-decoration-none text-dark">
                    <img src="/placeholder_vertical.jpg" class="card-img-top" alt="..." />
                    <p className='card-text text-center mt-1 text-decoration-none'>Lorem, ipsum.</p>
                </Link>
                <Link to='/product_feedback' class="card col p-2 border op-1 text-decoration-none text-dark">
                    <img src="/placeholder_vertical.jpg" class="card-img-top" alt="..." />
                    <p className='card-text text-center mt-1 text-decoration-none'>Lorem, ipsum.</p>
                </Link>
                <Link to='/product_feedback' class="card col p-2 border op-1 text-decoration-none text-dark">
                    <img src="/placeholder_vertical.jpg" class="card-img-top" alt="..." />
                    <p className='card-text text-center mt-1 text-decoration-none'>Lorem, ipsum.</p>
                </Link>
            </div>
        </div>
    )
}
export default CardsSelection