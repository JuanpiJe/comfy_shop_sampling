import React, { useState, useEffect, useLayoutEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moduleName from 'module'
import axios from 'axios'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function DetailedFeedback() {
    let user = useSelector(state => state.userReducer)
    let categories = useSelector(state => state.surveyReducer.brand_category)
    let indexProduct = useSelector(state => state.surveyReducer.productRender)
    let indexSize = useSelector(state => state.surveyReducer.productRender)
    const [productRender, setProductRender] = useState(categories[indexProduct])
    const [sizeRender, setSizeRender] = useState(categories[indexProduct].sizes[indexSize])
    const [detailedRating, setDetailedRating] = useState([])
    const [bodyZones, setBodyZones] = useState([])
    let mainContainer = document.getElementsByClassName('main-container')[0]

    useEffect(() => {
        fetchData()
        getBodyParts()
        mainContainer.classList.remove('align-items-center')
    }, [])

    useLayoutEffect(()=> {
        return (mainContainer.classList.add('align-items-center'))
    }, [])

    const fetchData = async () => {
        const detailedRatings = await axios.get('http://localhost:5000/api/surveys/form_data')
        setDetailedRating(detailedRatings.data.rating)
    }

    let getBodyParts = () => {
        axios.get('http://localhost:5000/api/surveys/form_data')
            .then((res) => {
                const filteredBodyZones = res.data.feedbackBodyZones.filter(bodyZone =>
                    bodyZone.body_zone_id === productRender.categoryZone)
                setBodyZones(filteredBodyZones)
            })
            .catch((error) => { console.log(error) })
    }

    function popOver(e) {
        let label = document.getElementsByName(`${e.target.id}-label`)[0]
        let selectorHelpText = document.getElementsByClassName('selector-help-text')[0]
        let radioInputs = Array.from(document.getElementsByName('rating-select'))
        selectorHelpText.innerHTML = ''
        radioInputs.map((element) => {
            // element.checked ? document.getElementsByName(`${element.id}-label`)[0].innerHTML = `<span class="mb-2 text-dark tooltip-box position-absolute translate-middle bottom-100 fw-bold">${element.value}</span>` : document.getElementsByName(`${element.id}-label`)[0].innerHTML = ""
            // console.log(element);
        })
    }

    return (
        <div className='d-flex flex-column justify-content-start w-100'>
            <div className="bg-light border border-dark my-3 py-2 rounded">
                <h5 className='text-center'>Contanos como te quedó la prenda:</h5>
                <h5 className='fw-bold'>{productRender.name}</h5>
                <h5 className='text-center fw-bold'>Talle: {sizeRender.label}</h5>
            </div>
            <form className='d-flex flex-column w-100'>
                <div className='feedback-section'>
                    {bodyZones.map(bodyZone => (
                        <>
                            <h5 className='mb-4 fw-bold text-center'>{bodyZone.name === 'Largo' ? bodyZone.name : `Ajuste en ${bodyZone.name}`}</h5>
                            <h6 className='mb-0 selector-help-text'>Seleccione una opción</h6>
                            <div className='selection-container mb-3 mx-2'>
                                <div className="btn-group mt-3 mb-0 w-100" role='group'>
                                    {detailedRating.map(rating => (
                                        <>
                                            <input type="radio" name={`rating-select`} id={rating.id} value={rating.name} className="btn-check " autocomplete='off' onClick={popOver} />
                                            <label htmlFor={rating.id} name='MS-label' className='btn btn-outline-dark py-2 selector-label'></label>
                                        </>
                                    ))}
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
                        </>
                    ))}
                </div>
            </form>
            <button className='btn btn-dark w-100'>Continuar</button>
        </div>
    )
}
export default DetailedFeedback