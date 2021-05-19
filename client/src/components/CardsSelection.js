import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setProductRender } from '../actions';
import { getCookie } from '../getCookie'
import {saveFitPreference} from '../actions'

function CardsSelection() {
    const [fitPrefereces, setFitPreferences] = useState([])
    let history = useHistory()
    const dispatch = useDispatch()
    let user = useSelector(state => state.userReducer)
    let categories = useSelector(state => state.surveyReducer.brand_category)
    let index = useSelector(state => state.surveyReducer.productRender)
    const [productRender, setProductRender] = useState(categories[index])

    useEffect(() => {
        getFitPreferences();
    }, [])
    let getFitPreferences = async () => {
        try {
            let res = await axios.get('http://localhost:5000/api/users/form')
                .then((res) => {
                    setFitPreferences(res.data.preferences)
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    let handleClick = (e) => {
        let preferenceID = e.currentTarget.id
        axios.post('http://localhost:5000/api/surveys/save_user_preferences', {
            data: {
                user: {
                    id: user.id
                },
                fit_preference: {
                    preference_id: preferenceID,
                    category_id: productRender.id
                }
            }
        }, {
            headers: {
                'auth-token': getCookie('token')
            }
        })
            .then((res) => {
                dispatch(saveFitPreference({
                    preference_id : preferenceID,
                    index
                }))
                return history.push('/product_feedback')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='cards-selection-form'>
            <div className='d-flex flex-column mb-3 align-items-center'>
                <h5>¿Cómo usas {productRender.categoryNameGender === 'F' ? 'las' : 'los'} {(productRender.category).toLowerCase()}?</h5>
            </div>
            <div className="card-group row gap-2">
                {fitPrefereces.map(preference => (
                    <div className="card col p-2 border text-decoration-none text-dark" id={preference.id} onClick={handleClick}>
                        <img src="/placeholder_vertical.jpg" className="card-img-top" alt="..." />
                        <p className='card-text text-center mt-1 text-decoration-none'>{preference.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CardsSelection