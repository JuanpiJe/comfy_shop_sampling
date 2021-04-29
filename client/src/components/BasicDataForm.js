import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import { appendErrors, useForm } from 'react-hook-form'

function BasicDataForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <div className='basic_data w-100 d-flex flex-column justify-content-center'>
            <h5 className='text-center'>Contanos sobre vos</h5>
            <p className='text-center text-muted justify-self-center'>Tus datos se encuentran protegidos y no se compartirán con nadie</p>
            <div action="" className='d-flex flex-column justify-content-center w-50 align-self-center'>
                <div className='input-group d-flex mb-2 align-self-center' >
                    <input type="number" name="weight" id="weight" className="form-control text-center" placeholder='Peso' />
                    <span className="input-group-text justify-content-center" style={{ 'width': '60px' }}>kg</span>
                </div>
                <div className='input-group mb-2 align-self-center' >
                    <input type="number" name="height" id="height" className="form-control text-center" placeholder='Altura' />
                    <span className="input-group-text justify-content-center" style={{ 'width': '60px' }}>cm</span>
                </div>
                <div className='input-group mb-2 align-self-center' >
                    <input type="number" name="age" id="age" className="form-control text-center" placeholder='Edad' />
                    <span className="input-group-text justify-content-center" style={{ 'width': '60px' }}>años</span>
                </div>
                <Link to='/body_shape_selection' class="btn btn-dark">Continuar</Link>
            </div>
        </div >
    )
}
export default BasicDataForm