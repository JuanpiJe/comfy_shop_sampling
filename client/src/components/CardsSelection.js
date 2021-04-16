import React, { useState, useEffect } from 'react'
function CardsSelection() {
    return (
        <form className='cards-selection-form'>
            <div className='d-flex flex-column mb-3 align-items-center'>
                <h5>¿Que forma tiene tu pecho?</h5>
                <small>Selecciona la imagen más descriptiva.</small>
            </div>
            <div class="card-group row gap-2 ">
                <div class="card col p-2 border op-1">
                    <img src="/placeholder_vertical.jpg" class="card-img-top" alt="..." />
                    <p className='card-text text-center mt-1 '>Ad Lorem</p>
                </div>
                <div class="card col p-2 border op-2">
                    <img src="/placeholder_vertical.jpg" class="card-img-top" alt="..." />
                    <p className='card-text text-center mt-1 '>Ad Lorem</p>
                </div>
                <div class="card col p-2 border op-3">
                    <img src="/placeholder_vertical.jpg" class="card-img-top" alt="..." />
                    <p className='card-text text-center mt-1 '>Ad Lorem</p>
                </div>
            </div>
        </form>
    )
}
export default CardsSelection