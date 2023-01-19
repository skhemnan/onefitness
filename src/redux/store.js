import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

/* REDUCERS */
import Auth from './reducer/Auth'
import Workout from './reducer/Workout'

const combineReducer = combineReducers({
		Auth: Auth,
		Workout: Workout
})

export const store = createStore(combineReducer, {}, applyMiddleware(thunk))