import { createContext, useState, useEffect , useReducer} from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'



export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (() => (null)),

})

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
const userReducer = (state, action) => {
    console.log('dispatch')
    console.log(action)

    const {type, payload} = action
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
            

        default:
            break;
    }

}

const INITIAL_STATE = {currentUser:null}



export const UserProvider = ({ children }) => {

    // const [currentUser, setCurrentUser] = useState(null)
   


    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload:user
        })
    }
   
    useEffect(() => {

        //used to clean up the method
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            console.log(user)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = { currentUser, setCurrentUser }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

