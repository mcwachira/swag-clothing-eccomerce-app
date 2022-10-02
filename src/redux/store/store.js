
import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { loggerMiddleware } from '../middleware/looger'
//root reducer
import { rootReducer } from '../root-reducer'
import thunk from 'redux-thunk'


const persistConfig ={
    key:'root', //persiting the whole store
    storage:storage ,// persisit in local Storage
    blacklist:['user'] ,//what will not be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares =[process.env.NODE_ENV ==="development" && loggerMiddleware, thunk].filter(Boolean)

// const thunkMiddleware = (store) => (next) => (action) => {
//     if(typeof(action) === 'function'){
//         action(dispatch)
//     }
// }

const composeEnhancer = (process.env.NODE_ENV !=='production'&& window && window._REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ ) || compose
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));


//undefined maybe the default state, composeEnhancers are passed at the end 
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)