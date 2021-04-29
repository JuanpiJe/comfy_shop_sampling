import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";

function UserEmail() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log(document.getElementById('email').value);
    }

    return (
            <div className='user_email w-100'>
                <h5 className='text-center'>¿Cuál es tu email?</h5>
                <form action="" className='row g-3 align-items center'>
                    <input type="text" name="email" id="email" className="form-control" placeholder='ejemplo@email.com' />
                    <small className='form-text text-muted justify-content-center'>Nos comunicaremos por este medio en caso de que resultes ganador/a.</small>
                    <Link to='/basic_data' className="btn btn-dark mt-2">Continuar</Link>
                    {/* <button type="submit" className="btn btn-dark mt-2" onClick={handleSubmit}></button> */}
                </form>
            </div>
    )
}
export default UserEmail