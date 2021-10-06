import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import MyReducer from '../Reducer/myReducer'
 import MyAnotherReducer from '../Reducer/myanotherReducer'

  const combinedAllReducers= combineReducers({MyReducer,MyAnotherReducer})
const mystore= createStore(combinedAllReducers,applyMiddleware(logger))

export default mystore