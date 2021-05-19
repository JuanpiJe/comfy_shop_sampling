import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { getCookie } from '../getCookie'
import {saveEmail} from '../actions'

function UserEmail() {
    const surveyState = useSelector(state => state.surveyReducer)
    const [apiErrors, setApiErrors] = useState()
    const dispatch = useDispatch()
    let history = useHistory()
    function handleSubmit(e) {
        e.preventDefault()
        let email = document.getElementById('email').value
        axios.post('http://localhost:5000/api/surveys/create_user', {
            data: {
                email,
                gender: surveyState.gender,
                brand_category: surveyState.brand_category
            }
        }, {
            headers: {
                'auth-token': getCookie('token')
            }
        })
            .then((res) => {
                dispatch(saveEmail({
                    email : res.data.data.user.email,
                    id : res.data.data.user.id
                }))
                return history.push('/basic_data')
            })
            .catch((error) => {
                setApiErrors(error.response.data)
            })
    }


    return (
        <div className='user_email w-100'>
            <h5 className='text-center'>¿Cuál es tu email?</h5>
            <form action="" className='row g-3 align-items center'>
                <input type="email" name="email" id="email" className="form-control" placeholder='ejemplo@email.com' />
                {apiErrors && <p className='fs-6 fw-bolder text-danger text-start my-0'>{apiErrors.data.message}</p>}
                <small className='form-text text-muted justify-content-center'>Nos comunicaremos por este medio en caso de que resultes ganador/a.</small>
                <button type="submit" className="btn btn-dark mt-2" onClick={handleSubmit}>Continuar</button>
            </form>
        </div>
    )
}
export default UserEmail