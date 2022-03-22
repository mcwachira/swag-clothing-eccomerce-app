import { createSelector } from "reselect";



// input selector a function that gets the staate and returns a slice
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    // collection of input selectors
    [selectCart],
    //function to return the value  of the selector
    cart => cart.cartItems
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((
        accumulatedQuantity, CartItem
    ) => accumulatedQuantity + CartItem.quantity
        , 0)
)