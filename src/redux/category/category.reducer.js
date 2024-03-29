import { CATEGORIES_ACTION_TYPE } from "./category.types.js";

const INITIAL_STATE = {
    categories:{},
    isLoading:false,
    error:null

}


export const categoryReducer = (state =INITIAL_STATE, action ={}) => {

    const {type, payload} = action
    switch(type){
        case  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {
                ...state,isLoading:false
            }

            case  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
                return {
                    ...state, categories:payload , isLoading:false
                }
                case  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
                    return {
                        ...state, error:payload, isLoading:false
                    }
            default:
                return state
    }

}
