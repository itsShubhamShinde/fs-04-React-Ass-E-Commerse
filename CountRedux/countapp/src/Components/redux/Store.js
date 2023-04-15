
import {legacy_createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import RootReducer from './Rootreducer'

export const myStore=legacy_createStore(RootReducer,applyMiddleware(logger))