import { combineReducers } from 'redux'

import getLoginReducer from './login.js'
import profileReducer from './profile.js'


export default combineReducers({
    getLoginReducer, profileReducer
})