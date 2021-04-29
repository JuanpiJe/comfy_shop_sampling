import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";

function Welcome() {
    return (
        <div className='container welcome_container d-flex flex-column justify-content-center min-vh-100 align-items-center'>
            <h2 className='fs-2 align-self-center'>Grun Store</h2>
            <p className='fw-light'> ¿Que desea hacer?</p>
            <div className="list-group">
                <Link to='/gender_selection' className="w-75 align-self-center mb-2 border border-secondary d-flex flex-column align-items-center list-group-item list-group-item-action ">
                    <h5 className='mb-1'>Nueva encuesta</h5>
                    <img className='' width='40%' src="/survey.png" alt="" />
                </Link>
                <button type='button' className="w-75 align-self-center border border-secondary d-flex flex-column align-items-center list-group-item list-group-item-action ">
                    <h5 className='m-0'>Agregar medidas</h5>
                    <img className='' width='15%' src="/new_meassure_2.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Welcome