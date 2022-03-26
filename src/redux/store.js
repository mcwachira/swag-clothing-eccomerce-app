import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist'
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//setting up our middleware as  an array of multiple middleware
const middlewares = [];


//apply the logger only in development
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}



//initializing our store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store)

export { store, persistor };