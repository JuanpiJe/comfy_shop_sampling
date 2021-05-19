import authReducer from './auth'
import surveyReducer from './survey'
import userReducer from './user'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    shopAuth : authReducer,
    surveyReducer,
    userReducer,
})

export default allReducers