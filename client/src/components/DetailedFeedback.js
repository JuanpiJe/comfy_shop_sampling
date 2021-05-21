import React, { useState, useEffect } from 'react'
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
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/api/users/form')
            setDetailedRating(result.data.rating)
        }
        fetchData()
    }, [])

    console.log(detailedRating);

    function popOver(e) {
        let label = document.getElementsByName(`${e.target.id}-label`)[0]
        let selectorHelpText = document.getElementsByClassName('selector-help-text')[0]
        let radioInputs = Array.from(document.getElementsByName('rating-select'))
        selectorHelpText.innerHTML = ''
        radioInputs.map((element) => {
            element.checked ? document.getElementsByName(`${element.id}-label`)[0].innerHTML = `<span class="mb-2 text-dark tooltip-box position-absolute translate-middle bottom-100 fw-bold">${element.value}</span>` : document.getElementsByName(`${element.id}-label`)[0].innerHTML = ""
        })
    }

    return (
        <div className='d-flex flex-column w-100'>
            <h5 className='text-center'>Contanos como te quedó la prenda:</h5>
            <h5 className='fw-bold'>{productRender.name}</h5>
            <h5 className='text-center mb-3 fw-bold'>Talle: {sizeRender.label}</h5>
            <form className='d-flex flex-column w-100'>
                <div className='feedback-section'>
                    <h5 className='mb-5 fw-bold text-center'>Ajuste en cintura</h5>
                    <h6 className='mb-0 selector-help-text'>Seleccione una opción</h6>
                    <div className='selection-container mb-3 mx-2'>
                        <div className="btn-group mt-3 mb-0 w-100" role='group'>
                            <input type="radio" name="rating-select" id="MS" value='Muy suelto' className="btn-check  " autocomplete='off' onClick={popOver} />
                            <label htmlFor="MS" name='MS-label' className='btn btn-outline-dark py-2 selector-label'>

                            </label>
                            <input type="radio" name="rating-select" id="PS" value='Un poco suelto' className="btn-check  " autocomplete='off' onClick={popOver} />
                            <label htmlFor="PS" name='PS-label' className='btn btn-outline-dark selector-label'>
                                {/* <span class='text-dark tooltip-box position-absolute translate-middle bottom-0 fw-bold'>Un poco ajustado
                                    <br />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span> */}
                            </label>
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
            </form>
            <button className='btn btn-dark'>Continuar</button>
        </div>
    )
}
export default DetailedFeedback