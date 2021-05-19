import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { getCookie } from '../getCookie'
import { saveSize } from '../actions'

function SizeSelection() {
    const dispatch = useDispatch()
    let history = useHistory()
    const [sizes, setSizes] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    useEffect(() => getSizes(), [])
    let getSizes = async () => {
        try {
            let res = axios.get('http://localhost:5000/api/categories/sizes', {
                headers: {
                    'auth-token': getCookie('token')
                }
            })
                .then((res) => setSizes(res.data.sizes))
        }
        catch (error) {
            console.log(error)
        }
    }
    let numeric = sizes.filter(size => size.label > 0)
    let string = sizes.filter(size => isNaN(size.label))
    let handleClick = (e) => {
        let sizeLabel = e.target.value
        let sizeID = e.target.id
        let isChecked = e.target.checked
        if (isChecked === true) {
            setSelectedSizes(
                [...selectedSizes,
                {
                    label: sizeLabel,
                    id: sizeID
                }]
            )
        }
        else {
            let deleteUnchecked = selectedSizes.filter(size => size.id !== sizeID)
            setSelectedSizes(deleteUnchecked)
        }
    }

    let handleSubmit = () => {
        dispatch(saveSize(selectedSizes))
        return history.push('/product_load_success')
    }

    return (
        <div>
            <h5 className='text-center'>¿Que <strong>talles</strong> se ha probado del producto?</h5>
            <div className='d-flex flex-column w-100'>
                <div className="btn-group mt-3 mb-3 w-100" role='group'>
                    {string.map(size => (
                        <>
                            <input type="checkbox" name='size' value={size.label} id={size.id} className="btn-check" autocomplete='off' onClick={handleClick} />
                            <label htmlFor={size.id} className='btn btn-outline-dark'>{size.label}</label>
                        </>
                    ))}
                </div>
                <div className="btn-group mt-2 mb-1 w-100" role='group'>
                    {numeric.map(size => (
                        size.label <= 38 ?
                            <>
                                <input type="checkbox" name='size' value={size.label} id={size.id} className="btn-check" autocomplete='off' onClick={handleClick} />
                                <label htmlFor={size.id} className='btn btn-outline-dark'>{size.label}</label>
                            </>
                            :
                            ''
                    ))}
                </div>
                <div className="btn-group mb-3 w-100" role='group'>
                    {numeric.map(size => (
                        size.label > 38 ?
                            <>
                                <input type="checkbox" name='size' value={size.label} id={size.id} className="btn-check" autocomplete='off' onClick={handleClick} />
                                <label htmlFor={size.id} className='btn btn-outline-dark'>{size.label}</label>
                            </>
                            :
                            ''
                    ))}
                </div>
                <button className='btn btn-dark' onClick={handleSubmit}>Continuar</button>
            </div>
        </div>
    )
}

export default SizeSelection