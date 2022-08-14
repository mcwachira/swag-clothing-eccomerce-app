import {CATEGORIES_ACTION_TYPE} from './category.type'
const INITIAL_STATE = {
    categories: [],
    isLoading:false,
    error:null
}


export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {

    const { type, payload } = action

    switch (type) {
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading:true
            }

        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS :
            return {
                ...state,
                isLoading:false,
                categories: payload
            }

        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error:payload,
                isLoading:false,
            }
            default:
            return state
    }

}