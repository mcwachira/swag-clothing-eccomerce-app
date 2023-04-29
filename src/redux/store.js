import  {compose, createStore, applyMiddleware} from 'redux'
import{persistStore, persistReducer} from 'redux-persist'
import  storage  from 'redux-persist/lib/storage'
import { rootReducer } from './root.reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

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


const persistConfig = {
    key:'root',
    storage,
    // user will not be stored in localStorage
    blacklist:['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



const sagaMiddleware = createSagaMiddleware()

//an array of middlwares
// .filter(boolean)_ will remove everything which is false
 const middleWares = [process.env.NODE_ENV ==='development' &&  logger , thunk, sagaMiddleware].filter(Boolean)

 const  composeEnhancer = (process.env.NODE_ENV === 'production' && window  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const composeEnhancers = compose(applyMiddleware(...middleWares))

//middleWares added as the third option
export const store = createStore(persistedReducer, undefined, composeEnhancers)

//runs after reducers have been updated

sagaMiddleware.run(rootSaga)
export const persistor  = persistStore(store)