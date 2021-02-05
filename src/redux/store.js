import { createStore ,applyMiddleware} from 'redux'
import {Reducer} from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const  myStore = createStore(Reducer,applyMiddleware(logger,thunk)) // applymiddleware work between action and reducer

export default  myStore