import { CART_ACTIONS_TYPES } from "./cart.types";
const CART_INITIAL_STATE = {
    showCart: false,
    cartItems: [],

}

export const cartReducer = (state = CART_INITIAL_STATE, action ={}) =>{

    const{type, payload} = action;

    switch (type) {
        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems:payload

            }

        case CART_ACTIONS_TYPES.TOGGLE_CART:
            return {
                ...state,
                showCart: payload

            }

     

        default:
            return state
    }
}





