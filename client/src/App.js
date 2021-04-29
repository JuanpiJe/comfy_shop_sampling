import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group"
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

const routes = [
  { path: '/login', Component: LoginForm },
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
  return (
    <div className='container d-flex justify-content-center min-vh-100 align-items-center position-relative'>
      {/* <div style={{ 'max-width': '600px' }} className='d-flex flex-column w-100 align-items-center m-2'> */}
        <Router>
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
          {/* <Route path="/login" exact component={LoginForm} />
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/gender_selection" exact component={GenderSelection} />
          <Route path="/category_selection" exact component={CategorySelection} />
          <Route path="/size_selection" exact component={SizeSelection} />
          <Route path="/product_load_success" exact component={ProductLoadSuccess} />
          <Route path="/user_email" exact component={UserEmail} />
          <Route path="/basic_data" exact component={BasicDataForm} />
          <Route path="/body_shape_selection" exact component={CardsSelection} />
          <Route path="/product_feedback" exact component={Feedback} />
          <Route path="/success" exact component={Success} /> */}

        </Router>
      </div>
    // </div >
  );
}

export default App;
