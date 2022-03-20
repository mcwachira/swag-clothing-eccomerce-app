//setting up initial state for the reducer

const INITIAL_STATE = {
    currentUser: null
}

//using the Initial state as a default value for the state
// a reducer can listen to any action so we are specifying the specific action the reducer should listen too
const userReducer = (state = INITIAL_STATE, action) => {

    //switch statement is where we modify the state based on the type of action 
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }

}

export default userReducer;