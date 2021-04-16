import React, { useState, useEffect } from 'react'
function Feedback() {
    return (
        <div className='d-flex flex-column w-100'>
            <h5 className='text-center mb-4'>¿Cómo te ha quedado la Remera Lorem Ipsum?</h5>
            <form className='d-flex flex-column w-100'>
                <div className='feedback-section'>
                    <h6 className='mb-1 fw-bold text-center'>Ajuste en pecho</h6>
                    <small className='mb-0'>Seleccione una opción</small>
                    <div className='selection-container mb-3'>
                        <div className="btn-group mt-3 mb-0 w-100" role='group'>
                            <input type="radio" name="option-1-select" id="XS" className="btn-check" autocomplete='off' />
                            <label htmlFor="XS" className='btn btn-outline-dark py-2'></label>
                            <input type="radio" name="option-1-select" id="S" className="btn-check" autocomplete='off' />
                            <label htmlFor="S" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="M" className="btn-check" autocomplete='off' />
                            <label htmlFor="M" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="L" className="btn-check" autocomplete='off' />
                            <label htmlFor="L" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="XL" className="btn-check" autocomplete='off' />
                            <label htmlFor="XL" className='btn btn-outline-dark'></label>
                        </div>
                        <div className='row mt-0'>
                            <div className='col text-start'>
                                <small className='text-muted'>Muy ajustado</small>
                            </div>
                            <div className='col text-end'>
                                <small className='text-muted'>Muy suelto</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='feedback-section'>
                    <h6 className='mb-1 fw-bold text-center'>Ajuste en cintura</h6>
                    <small className='mb-0'>Seleccione una opción</small>
                    <div className='selection-container mb-3'>
                        <div className="btn-group mt-3 mb-0 w-100" role='group'>
                            <input type="radio" name="option-1-select" id="XS" className="btn-check" autocomplete='off' />
                            <label htmlFor="XS" className='btn btn-outline-dark py-2'></label>
                            <input type="radio" name="option-1-select" id="S" className="btn-check" autocomplete='off' />
                            <label htmlFor="S" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="M" className="btn-check" autocomplete='off' />
                            <label htmlFor="M" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="L" className="btn-check" autocomplete='off' />
                            <label htmlFor="L" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="XL" className="btn-check" autocomplete='off' />
                            <label htmlFor="XL" className='btn btn-outline-dark'></label>
                        </div>
                        <div className='row mt-0'>
                            <div className='col text-start'>
                                <small className='text-muted'>Muy ajustado</small>
                            </div>
                            <div className='col text-end'>
                                <small className='text-muted'>Muy suelto</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='feedback-section'>
                    <h6 className='mb-1 fw-bold text-center'>Ajuste en caderas</h6>
                    <small className='mb-0'>Seleccione una opción</small>
                    <div className='selection-container mb-3'>
                        <div className="btn-group mt-3 mb-0 w-100" role='group'>
                            <input type="radio" name="option-1-select" id="XS" className="btn-check" autocomplete='off' />
                            <label htmlFor="XS" className='btn btn-outline-dark py-2'></label>
                            <input type="radio" name="option-1-select" id="S" className="btn-check" autocomplete='off' />
                            <label htmlFor="S" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="M" className="btn-check" autocomplete='off' />
                            <label htmlFor="M" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="L" className="btn-check" autocomplete='off' />
                            <label htmlFor="L" className='btn btn-outline-dark'></label>
                            <input type="radio" name="option-1-select" id="XL" className="btn-check" autocomplete='off' />
                            <label htmlFor="XL" className='btn btn-outline-dark'></label>
                        </div>
                        <div className='row mt-0'>
                            <div className='col text-start'>
                                <small className='text-muted'>Muy ajustado</small>
                            </div>
                            <div className='col text-end'>
                                <small className='text-muted'>Muy suelto</small>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <button type="submit" className='btn btn-dark '>Continuar</button>
        </div>
    )
}

export default Feedback