//represent all the states of our component
//combines all our our reducers


//enables us to join all our reducers
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
export default combineReducers({
    user: userReducer
})