import React, { useState, useEffect } from 'react'
function SizeSelection() {
    return (
        <div>
            <h5 className='text-center'>¿Que <strong>talles</strong> se ha probado del producto?</h5>
            <form className='d-flex flex-column w-100'>
                <div className="btn-group mt-3 mb-3 w-100" role='group'>
                    <input type="checkbox" name="XS" id="XS" className="btn-check" autocomplete='off' />
                    <label htmlFor="XS" className='btn btn-outline-dark'>XS</label>
                    <input type="checkbox" name="S" id="S" className="btn-check" autocomplete='off' />
                    <label htmlFor="S" className='btn btn-outline-dark'>S</label>
                    <input type="checkbox" name="M" id="M" className="btn-check" autocomplete='off' />
                    <label htmlFor="M" className='btn btn-outline-dark'>M</label>
                    <input type="checkbox" name="L" id="L" className="btn-check" autocomplete='off' />
                    <label htmlFor="L" className='btn btn-outline-dark'>L</label>
                    <input type="checkbox" name="XL" id="XL" className="btn-check" autocomplete='off' />
                    <label htmlFor="XL" className='btn btn-outline-dark'>XL</label>
                </div>
                <button type="submit" className='btn btn-dark'>Continuar</button>
            </form>
        </div>
    )
}

export default SizeSelection