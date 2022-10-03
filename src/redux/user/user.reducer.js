
import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = { 
    currentUser: null ,
    isLoading:false,
    error:null


}


//reducers are functions that return new objects
export const userReducer = (state = INITIAL_STATE, action) => {
    console.log('dispatch')
    console.log(action)

    // const { type, payload } = action
    switch (action.type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state, 
                currentUser: action.payload
            }

        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return {
                ...state,
                currentUser: action.payload
            }


        default:
            return state
    } 

}



