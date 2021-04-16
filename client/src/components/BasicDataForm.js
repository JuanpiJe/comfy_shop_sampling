import React, { useState, useEffect } from 'react'
function BasicDataForm() {
    return (
        <div className='basic_data w-100'>
            <h5 className='text-center'>Contanos sobre vos</h5>
            <p className='text-center text-muted justify-self-center'>Tus datos se encuentran protegidos y no se compartirán con nadie</p>
            <form action="" className='d-flex flex-column justify-content-center '>
                <div className='input-group d-flex mb-2' >
                    <input type="number" name="weight" id="weight" className="form-control text-center" placeholder='Peso' />
                    <span className="input-group-text" style={{'width' : '60px'}}>kg</span>
                </div>
                <div className='input-group mb-2' >
                    <input type="number" name="height" id="height" className="form-control text-center" placeholder='Altura' />
                    <span className="input-group-text text-center" style={{'width' : '60px'}}>cm</span>
                </div>
                <div className='input-group mb-2' >
                    <input type="number" name="years" id="years" className="form-control text-center" placeholder='Edad' />
                    <span className="input-group-text" style={{'width' : '60px'}}>años</span>
                </div>
            <button class="btn btn-dark" type="button" id="button-addon2">Continuar</button>
            </form>
        </div >
    )
}
export default BasicDataForm
