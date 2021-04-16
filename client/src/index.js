import './css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'

// let store = createStore()

//STORE -> GLOBALIZED STATE

//ACTION -> DESCRIBES WHAT YOU WANT TO DO (P.E. I GO TO THE STORE AND WANT TO BUY SOMETHING)
// const saveLoggedShop = () => {
//   return {
//     type : 'SAVE LOGGED SHOP',
//   }
// }

//REDUCER -> HOW ACTIONS TRANSFORM THE STATE IN TO THE NEXT STATE
// const loggedShop = (state = null, action) => {
//   switch (action.type){
//     case 'SAVE LOGGED SHOP'
//   }
// }


//DISPATCH -> SEND THE ACTION TO THE REDUCER

//OPERATION BRIEF -> THE ACTION IS CALLED, THE DISPATCH SEND THE ACTION TO THE REDUCER, THE REDUCER CHECK WHAT ACTION YOU DID, AND BASE ON THE ACTION IT´S GOING TO MODIFY THE STORE


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
