import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moduleName from 'module'
import axios from 'axios'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {saveGeneralRating} from '../actions'

function GeneralRating() {
    let survey = useSelector(state => state.surveyReducer)
    let user = useSelector(state => state.userReducer)
    let gender = useSelector(state => state.surveyReducer.gender.name)
    let categories = useSelector(state => state.surveyReducer.brand_category)
    let indexProduct = useSelector(state => state.surveyReducer.productRender)
    let indexSize = useSelector(state => state.surveyReducer.productRender)
    const dispatch = useDispatch()
    let history = useHistory()
    const [productRender, setProductRender] = useState(categories[indexProduct])
    const [sizeRender, setSizeRender] = useState(categories[indexProduct].sizes[indexSize])
    const [basicRating, setBasicRating] = useState([])
    console.log(productRender);
    console.log(sizeRender);
    useEffect(() => getBasicRating(), [])
    let getBasicRating = async () => {
        try {
            let res = await axios.get('http://localhost:5000/api/surveys/form_data')
                .then((res) => {
                    setBasicRating(res.data.basicRating)
                })
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(basicRating);
    function handleClick(e) {
        let generalRatingID = e.currentTarget.id
        dispatch(saveGeneralRating({
            user_id : user.id,
            survey_id : survey.id,
            brand_category_id : productRender.id,
            size_id : sizeRender.id,
            general_rating_id : generalRatingID
        }))
        return history.push('/product_feedback/detailed')
    }
   
    return (
        <div className='d-flex flex-column mw-100'>
            <h5 className='text-center'>Contanos como te quedó la prenda:</h5>
            <h5 className='fw-bold'>{productRender.name}</h5>
            <h5 className='text-center mb-3 fw-bold'>Talle: {sizeRender.label}</h5>
            <h4 className='mb-1 fw-bold text-center'>¿Qué tan {gender === 'Hombre' ? 'satisfecho' : 'satisfecha' } estás con el talle elegido?</h4>
            <div className='d-flex w-100 justify-content-center mb-3'>
                <div className="match-list list-group my-3 mx-3 w-100 d-flex flex-column" role='group'>
                    {basicRating.map(rating => (
                        <>
                            <input type="radio" name='basic_rating' value={rating.label} id={rating.id} className="btn-check" autocomplete='off' onClick={handleClick}/>
                            <label htmlFor={rating.id} className='mt-2 mb-2 text-center list-group-item list-group-item-action border fw-bold'>{rating.name}</label>
                        </>
                    ))}
                </div>
                {/* <form className='d-flex flex-column w-100'>
                <div className='feedback-section'>
                    <h5 className='mb-5 fw-bold text-center'>Ajuste en cintura</h5>
                    <h6 className='mb-0 selector-help-text'>Seleccione una opción</h6>
                    <div className='selection-container mb-3 mx-2'>
                        <div className="btn-group mt-3 mb-0 w-100" role='group'>
                            <input type="radio" name="rating-select" id="MS" value='Muy suelto' className="btn-check  " autocomplete='off' onClick={popOver} />
                            <label htmlFor="MS" name='MS-label' className='btn btn-outline-dark py-2 selector-label'></label>
                            <input type="radio" name="rating-select" id="PS" value='Un poco suelto' className="btn-check  " autocomplete='off' onClick={popOver} />
                            <label htmlFor="PS" name='PS-label' className='btn btn-outline-dark selector-label'></label>
                            <input type="radio" name="rating-select" id="P" value='Perfecto' className="btn-check  " autocomplete='off' onClick={popOver} />
                            <label htmlFor="P" name='P-label' className='btn btn-outline-dark selector-label'></label>
                            <input type="radio" name="rating-select" id="PA" value='Un poco ajustado' className="btn-check  " autocomplete='off' onClick={popOver} />
                            <label htmlFor="PA" name='PA-label' className='btn btn-outline-dark selector-label'></label>
                            <input type="radio" name="rating-select" id="MA" value='Muy ajustado' className="btn-check  " autocomplete='off' onClick={popOver} />
                            <label htmlFor="MA" name='MA-label' className='btn btn-outline-dark selector-label'></label>
                        </div>
                        <div className='row mt'>
                            <div className='col text-start px-0'>
                                <small className='text-muted'>Muy suelto</small>
                            </div>
                            <div className='col text-center px-0'>
                                <small className='text-muted'>Perfecto</small>
                            </div>
                            <div className='col text-end px-0'>
                                <small className='text-muted'>Muy ajustado</small>
                            </div>
                        </div>
                    </div>
                </div>
            </form> */}
                {/* <button className='btn btn-dark' onClick={handleSubmit}>Continuar</button> */}
            </div >
        </div >
    )
}

export default GeneralRating