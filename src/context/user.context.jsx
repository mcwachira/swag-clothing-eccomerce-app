import {createContext,  useEffect , useReducer}  from 'react'
import { createUserDocumentFromAuth, onAuthStateChangeListener } from '../utils/firebase/firebase.utils'


export const UserContext = createContext({

    currentUser:null,
    setCurrentUser: () => null
})



const USER_ACTION_TYPE = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}
//a reducer will always return an object

const userReducer = (state, action) => {


    const {type, payload} =  action


        switch (type) {
            case USER_ACTION_TYPE.SET_CURRENT_USER:
            
            return  {
                ...state,
                currentUser:payload
            }
            default:
            throw new Error(`Unhandled type ${type} in userReducer`)
        }
    

}


//SET INITIAL STATE

const INITIAL_STATE = {currentUser:null}
export const  UserProvider = ({children})  => {

    // const [currentUser, setCurrentUser] = useState(null)


    const [{currentUser}, dispatch] =  useReducer(userReducer, INITIAL_STATE)

    const setCurrentUser = (user) => {dispatch({type:USER_ACTION_TYPE.SET_CURRENT_USER, payload:user})}
    useEffect(() => {

        const unsubscribe =  onAuthStateChangeListener((user) => {
            console.log(user)
            if(user){
     createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)      
        
        })

        return unsubscribe;
    }, [])
    const value = {

        currentUser,
        setCurrentUser,
    }


    return  <UserContext.Provider value={value}>{children} </UserContext.Provider>
}