//represent all the states of our component
//combines all our our reducers


//enables us to join all our reducers
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'


//telling redux persist the app is to use local storage
import storage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //contains the string names of any reduce=r we want to store

}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);