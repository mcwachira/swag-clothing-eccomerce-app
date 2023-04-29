import { CATEGORIES_ACTION_TYPE } from "./category.types.js";

const INITIAL_STATE = {
    categories:{}
}


export const categoryReducer = (state =INITIAL_STATE, action ={}) => {

    const {type, payload} = action
    switch(type){
        case  CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
            return {
                ...state, categories:payload
            }

            default:
                return state
    }

}
