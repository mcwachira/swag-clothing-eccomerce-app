import  {compose, createStore, applyMiddleware} from 'redux'
import { rootReducer } from './root.reducer'
import logger from 'redux-logger'


//logger middleware

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action)
    }

    console.log('type', action.type)
    console.log('payload', action.payload)
    console.log('currentState', store.getState())

    next(action)

    console.log('next state : ', store.getState())
}

//an array of middlwares
 const middleWares = [logger]

const composeEnhancers = compose(applyMiddleware(...middleWares))

//middleWares added as the third option
export const store = createStore(rootReducer, undefined, composeEnhancers)