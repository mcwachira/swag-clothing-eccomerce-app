import {createSelector}  from 'reselect'


//create a slice from our  cart state

const selectCartReducer  = state => state.cart;



export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.showCart
)


export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)


export const selectCartCount = createSelector(
    [selectCartItems],
   (cartItems) => cartItems.reduce((total, item) => (total + item.quantity), 0)
)

export const SelectCartTotal = createSelector(
    [selectCartItems],
( cartItems) => cartItems.reduce((total, item) => (total + item.quantity * item.price), 0)

)