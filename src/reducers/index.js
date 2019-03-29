import { combineReducers } from 'redux'
import restaurants from './restaurants'
import reviews from './reviews'

export default combineReducers ({
    restaurants,
    reviews
})
