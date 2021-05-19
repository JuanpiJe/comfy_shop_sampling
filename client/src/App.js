import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, StaticRouter, Switch, useLocation, useHistory } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useSelector, useDispatch } from 'react-redux'
import Welcome from './components/Welcome'
import GenderSelection from './components/GenderSelection'
import CategorySelection from './components/CategorySelection'
import SizeSelection from './components/SizeSelection'
import ProductLoadSuccess from './components/ProductLoadSuccess'
import UserEmail from './components/UserEmail'
import LoginForm from './components/LoginForm'
import BasicDataForm from './components/BasicDataForm'
import CardsSelection from './components/CardsSelection'
import Feedback from './components/Feedback'
import Success from './components/Success'
import { saveLogin } from './actions'
import { faChessKing } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {getCookie} from './getCookie'

const routes = [
  { path: '/welcome', Component: Welcome },
  { path: '/gender_selection', Component: GenderSelection },
  { path: '/category_selection', Component: CategorySelection },
  { path: '/size_selection', Component: SizeSelection },
  { path: '/product_load_success', Component: ProductLoadSuccess },
  { path: '/user_email', Component: UserEmail },
  { path: '/basic_data', Component: BasicDataForm },
  { path: '/body_shape_selection', Component: CardsSelection },
  { path: '/product_feedback', Component: Feedback },
  { path: '/success', Component: Success }
]

function App() {
  const shopAuth = useSelector(state => state.shopAuth)
  const dispatch = useDispatch()
  let history = useHistory()
  if (getCookie('token') !== undefined) {
    if (shopAuth.id === undefined) {
      axios.get('http://localhost:5000/api/shops/overview', {
        headers: {
          'auth-token': getCookie('token')
        }
      })
        .then((res) => {
          dispatch(saveLogin({
            shopName: res.data.shop.name,
            shopID: res.data.shop.id
          }))
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
  else return (
    <div className='container d-flex justify-content-center min-vh-100 align-items-center position-relative'>
      <Router>
        <Redirect to='/login' />
        <Route exact path='/login' component={LoginForm} />
      </Router>
    </div>
  )
  return (
    <div className='container d-flex justify-content-center min-vh-100 align-items-center position-relative'>
      <Router>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
        <Route exact path='/login' component={LoginForm} />
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div style={{ 'max-width': '600px' }} className="page d-flex flex-column align-items-center container ">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Router>
    </div>
  );
}

export default App;