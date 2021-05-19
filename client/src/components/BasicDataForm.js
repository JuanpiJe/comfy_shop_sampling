import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { appendErrors, useForm } from 'react-hook-form'
import axios from 'axios'
import {saveBasicData} from '../actions'
import { getCookie } from '../getCookie'

function BasicDataForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [braSizes, setBraSizes] = useState([])
    const dispatch = useDispatch()
    let history = useHistory()
    let gender = useSelector(state => state.surveyReducer.gender.name)
    let userID = useSelector(state => state.userReducer.id)
    useEffect(() => getBraSizes(), [])
    let getBraSizes = async () => {
        try {
            let res = await axios.get('http://localhost:5000/api/users/form')
                .then((res) => {
                    setBraSizes(res.data.braSize)
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    // }
    return (
        <div className='basic_data w-100 d-flex flex-column justify-content-center'>
            <h5 className='text-center'>Contanos sobre vos</h5>
            <p className='text-center text-muted justify-self-center'>Tus datos se encuentran protegidos y no se compartirán con nadie</p>
            <form className='d-flex flex-column justify-content-center w-50 align-self-center' onSubmit={handleSubmit((data) => {
                let bmi = Math.round(data.weight / (Math.pow((data.height / 100), 2)))
                let user = {
                    id: userID,
                    height: parseInt(data.height, 10),
                    weight: parseInt(data.weight, 10),
                    age: parseInt(data.age, 10),
                    bra_size_id: parseInt(data.bra_size, 10),
                    bmi: bmi
                }
                axios.post('http://localhost:5000/api/surveys/save_basic_data', {
                    data: {
                        user
                    }
                }, {
                    headers: {
                        'auth-token': getCookie('token')
                    }
                })
                    .then((res) => {
                        dispatch(saveBasicData(user))
                        history.push('/body_shape_selection')
                    })
                    .catch((error) => console.log(error))
            })}>
                <div className='input-group d-flex mb-2 align-self-center' >
                    <input type="number" name="weight" id="weight" className="form-control text-center" placeholder='Peso' {...register('weight', { required: 'Campo requerido' })} />
                    <span className="input-group-text justify-content-center" style={{ 'width': '60px' }}>kg</span>
                </div>
                <div className='input-group mb-2 align-self-center' >
                    <input type="number" name="height" id="height" className="form-control text-center" placeholder='Altura' {...register('height', { required: 'Campo requerido' })} />
                    <span className="input-group-text justify-content-center" style={{ 'width': '60px' }}>cm</span>
                </div>
                <div className='input-group mb-2 align-self-center' >
                    <input type="number" name="age" id="age" className="form-control text-center" placeholder='Edad' {...register('age', { required: 'Campo requerido' })} />
                    <span className="input-group-text justify-content-center" style={{ 'width': '60px' }}>años</span>
                </div>
                {gender === 'Mujer' ?
                    <div className='input-group mb-2 align-self-center' >
                        <select class="form-select text-center" aria-label="Default select example" {...register('bra_size')}>
                            <option selected>Talle de corpiño</option>
                            {braSizes.map((braSize => (
                                <option value={braSize.id}>{braSize.value}</option>
                            )))}
                        </select>
                    </div>
                    :
                    ''
                }
                <button type='submit' to='/body_shape_selection' class="btn btn-dark">Continuar</button>
            </form>
        </div >
    )
}
export default BasicDataForm