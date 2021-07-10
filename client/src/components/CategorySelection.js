import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { getCookie } from '../getCookie'
import { saveProduct } from '../actions';
import { setProductRender } from '../actions';
import { setSizeRender } from '../actions';

function CategorySelection() {
    const gender = useSelector(state => state.surveyReducer.gender.name)
    const dispatch = useDispatch()
    const [suggestions, setSuggestions] = useState([])
    const [products, setProducts] = useState([])
    let history = useHistory()
    useEffect(() => getProducts(), [])
    let getProducts = async () => {
        try {
            let res = await axios.get('http://localhost:5000/api/surveys/shop_data', {
                headers: {
                    'auth-token': getCookie('token')
                }
            })
                .then((res) => {
                    const productsByGender = res.data.shopData.filter(product =>
                        product.gender.name === `${gender}`);
                    setProducts(productsByGender.map(product => (
                        {
                            name: product.name,
                            id: product.id,
                            categoryName: product.category.name_plural,
                            categoryNameGender: product.category.name_gender,
                            categoryZone: product.category.body_zone_id
                        })
                    ))
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    let handleChange = (e) => {
        const value = e.target.value
        let matches = products.filter(product => {
            const regex = new RegExp(`^${value}`, 'gi')
            return product.name.match(regex)
        })
        if (matches.length > 0 && value.length > 0) {
            setSuggestions(matches)
        }
        else setSuggestions([{
            name: 'No se encontraron productos'
        }])
    }

    let handleClick = (e) => {
        let productID = parseInt(e.target.id, 10)
        let product = products.filter(product => (
            product.id === productID
        ))
        dispatch(
            saveProduct({
                id: product[0].id,
                name: product[0].name,
                sizes: [],
                category: product[0].categoryName,
                categoryNameGender: product[0].categoryNameGender,
                categoryZone: product[0].categoryZone,
                preference_id: null
            }))
        dispatch(setProductRender(0))
        dispatch(setSizeRender(0))
        history.push('/size_selection')
    }

    return (
        <div className='category_search w-100'>
            <div className='input_container'>
                <h5 className='text-center'>Ingrese la <strong>categoría y marca </strong> del producto</h5>
                <input type="text" id='search' className='form-control mt-3' placeholder='Ej. Remera Ralph Lauren' onChange={handleChange} />
            </div>
            <div className="match-list list-group w-100 mt-2">
                {suggestions.map(product => (
                    product.id ?
                        <div className='mt-2 mb-2 text-center list-group-item list-group-item-action border' id={product.id} onClick={handleClick}>
                            {product.name}
                        </div>
                        :
                        <p>{product.name}</p>
                ))}
            </div>
        </div>

    )
}

export default CategorySelection