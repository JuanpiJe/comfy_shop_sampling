import './css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// let store = createStore(reducer)

//STORE -> GLOBALIZED STATE -> HOLDS ALL THE DATA FOR OUR APP

//ACTION -> DESCRIBES WHAT YOU WANT TO DO (P.E. I GO TO THE STORE AND WANT TO BUY SOMETHING)
// const saveLogin = () => {
//   return {
//     type: 'LOGIN'
//   }
// }

//REDUCER -> HOW ACTIONS TRANSFORM THE STATE IN TO THE NEXT STATE
// const auth = (state = 0, action) => {
//   switch(action.type){
//     case "LOGIN" :
//       return state +1;
//   }
// }

// store.subscribe(()=> console.log(store.getState()))

//DISPATCH -> SEND THE ACTION TO THE REDUCER
// store.dispatch(saveLogin())


//OPERATION BRIEF -> THE ACTION IS CALLED, THE DISPATCH SEND THE ACTION TO THE REDUCER, THE REDUCER CHECK WHAT ACTION YOU DID, AND BASE ON THE ACTION IT´S GOING TO MODIFY THE STORE


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
