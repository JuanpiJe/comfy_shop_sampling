import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import GenderSelection from './GenderSelection'
import CategorySelection from './CategorySelection'
import SizeSelection from './SizeSelection'
import ProductLoadSuccess from './ProductLoadSuccess'
import UserEmail from './UserEmail'
import LoginForm from './LoginForm'
import BasicDataForm from './BasicDataForm'
import CardsSelection from './CardsSelection'
import Feedback from './Feedback'
import Success from './Success'

function SurveyContainer() {
    return (
        <div className='container d-flex justify-content-center min-vh-100 align-items-center'>
            {/* <a href="#"><FontAwesomeIcon icon={faChevronLeft} style={{ color: 'gray' }} /></a> */}
            <div style={{'max-width' : '600px'}} className='d-flex flex-column w-100 align-items-center m-4'>
                <Success/>
            </div>
        </div>
    )
}

export default SurveyContainer