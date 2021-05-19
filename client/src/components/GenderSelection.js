import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { saveGender } from '../actions';

function GenderSelection() {
    const dispatch = useDispatch()
    let history = useHistory()
    let handleClick = (e) => {
        let genderName = e.target.value
        let genderID = e.target.id
        console.log(genderID);
        dispatch(saveGender({
            gender: {
                id: genderID,
                name: genderName
            }
        }))
        return history.push('/category_selection')
    }
    return (
        <div className='w-100 gender_selection'>
            <h5 className='text-center'>Seleccione el género al que pertenecen los productos.</h5>
            <div className='d-flex flex-column w-100'>
                <div className="btn-group m-3" id='genderForm'>
                    <input type="radio" className="btn-check w-100" name='gender' id='1' value='Mujer' autoComplete='off' onClick={handleClick} />
                    <label className="btn btn-outline-dark" htmlFor="1">Mujer</label>
                    <input type="radio" className="btn-check" name='gender' id='2' value='Hombre' autoComplete='off' onClick={handleClick} />
                    <label className="btn btn-outline-dark" htmlFor="2">Hombre</label>
                    <input type="radio" className="btn-check" name='gender' id='3' autoComplete='off' value='Unisex' onClick={handleClick} />
                    <label className="btn btn-outline-dark" htmlFor="3">Unisex</label>
                </div>
            </div>
        </div>
    )
}

export default GenderSelection