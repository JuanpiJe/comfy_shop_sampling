import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import { appendErrors, useForm } from 'react-hook-form'
import axios from 'axios'
import defaults from '../requests/default'
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { saveLogin } from '../actions'
import { getCookie } from '../getCookie'

function LoginForm() {
    let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const [apiErrors, setApiErrors] = useState(null)
    if (getCookie('token') !== undefined) {
        return <Redirect to='/welcome' />
    }

    return (
        <form action="" className='d-flex flex-column' novalidate onSubmit={handleSubmit((data) => {
            axios.post('http://localhost:5000/api/shops/login', {
                username: data.username,
                password: data.password
            })
                .then((res) => {
                    let shop = {
                        id: res.data.id,
                        username: res.data.username,
                        token: res.data.token
                    }
                    axios.get('http://localhost:5000/api/shops/overview', {
                        headers: {
                            'auth-token': shop.token
                        }
                    })
                        .then((res) => {
                            dispatch(saveLogin({
                                shopName: res.data.shop.name,
                                shopID: res.data.shop.id,
                            }))
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    document.cookie = `id = ${shop.id}; max-age=${30 * 24 * 60 * 60}`
                    document.cookie = `username = ${shop.username}; max-age=${30 * 24 * 60 * 60}`
                    document.cookie = `token = ${shop.token}; max-age=${30 * 24 * 60 * 60}`
                    return history.push('/welcome')
                })
                .catch((error) => {
                    console.log(error.response);
                    if (error) {
                        setApiErrors({
                            errors: error.response.data.errors
                        })
                    }
                })
        })} >
            <h1 className='align-self-center'>Iniciar sesión</h1>
            <p className='align-self-center'>Ingrese las credenciales de su negocio para continuar.</p>
            {apiErrors && <p className='fs-6 fw-bolder text-danger'>{apiErrors.errors.username.msg}</p>}
            <div className="form-floating mb-2">
                <input class='form-control' type="text" name="username" id="username" placeholder='Ingrese el nombre de usuario' {...register('username', { required: 'Campo requerido.' })} />
                <label htmlFor="username">Nombre de usuario</label>
                {errors.username && <p className='fs-6 fw-bolder text-danger text-start'>{errors.username.message}</p>}
            </div>
            <div className="form-floating mb-2">
                <input class='form-control' type="password" name="password" id="password" placeholder='Ingrese la contraseña' {...register('password', { required: 'Campo requerido.' })} />
                <label htmlFor="username">Contraseña</label>
                {errors.password && <p className='fs-6 fw-bolder text-danger text-start'>{errors.password.message}</p>}
            </div>
            <input type="submit" value='Iniciar sesión' className='btn btn-dark btn-lg' />
        </form>
    )
}
export default LoginForm