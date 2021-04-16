import React, { useState } from 'react'
import ReactDOM from "react-dom";
import { appendErrors, useForm } from 'react-hook-form'
import axios from 'axios'
import defaults from '../requests/default'

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [user, setUser] = useState(null)
    const [apiErrors, setApiErrors] = useState(null)
    return (
        <div className = 'container d-flex justify-content-center min-vh-100 align-items-center'>
            <form action="" className='d-flex flex-column' novalidate onSubmit={handleSubmit((data) => {
                axios.post('http://localhost:5000/api/shops/login', {
                    username: data.username,
                    password: data.password
                })
                    .then((res) => {
                        setUser({
                            id: res.data.id,
                            username: res.data.username,
                            token: res.data.token
                        })
                    }).catch((error) => {
                        console.log(error.response);
                        setApiErrors({
                            errors: error.response.data.errors
                        })
                        console.log(apiErrors);
                    })
            })} >
                <h1 className='align-self-center'>Iniciar sesión</h1>
                <p className='align-self-center'>Ingrese las credenciales de su negocio para continuar.</p>
                {apiErrors && <p className='fs-6 fw-bolder text-danger'>{apiErrors.errors.username.msg}</p>}
                <div className="form-floating mb-2">
                    <input class='form-control' type="text" name="username" id="username" placeholder='Ingrese el nombre de usuario' {...register('username', { required: 'Campo requerido.' })} />
                    <label htmlFor="username">Nombre de usuario</label>
                    {errors.username && <p className='fs-6 fw-bolder text-danger'>{errors.username.message}</p>}
                </div>
                <div className="form-floating mb-2">
                    <input class='form-control' type="password" name="password" id="password" placeholder='Ingrese la contraseña' {...register('password', { required: 'Campo requerido.' })} />
                    <label htmlFor="username">Contraseña</label>
                    {errors.password && <p className='fs-6 fw-bolder text-danger'>{errors.password.message}</p>}
                </div>
                <input type="submit" value='Iniciar sesión' className='btn btn-dark btn-lg' />
            </form>
        </div>
    )
}
export default LoginForm