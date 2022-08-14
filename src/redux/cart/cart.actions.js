import { CART_ACTIONS_TYPES } from "./cart.types";



//check if the product exist in the cartItems and if it does the quantity is increased if not a new array is created with the item.
const addCartItem = (cartItems, productToAdd) => {
    //check if the product exist in the cart

    const existingItem = cartItems.find((cartItem) => (cartItem.id === productToAdd.id));

    //if the item exist in the cart update the quantity of the item
    if (existingItem) {
        return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    }
    else {
        //returning a new item and its quantity
        return [...cartItems, { ...productToAdd, quantity: 1 }]
    }

}



//increase or decrease item in checkout page 

const decreaseCartItems = (cartItems, productToReduce) => {
    const existingItem = cartItems.find((cartItem) => (cartItem.id === productToReduce.id));
    if (existingItem.quantity === 1) {

        return cartItems.filter((cartItem) => (existingItem.id !== cartItem.id))

    } else {
        return cartItems.map((cartItem) => (cartItem.id === existingItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
    }



}

const deleteItem = (cartItems, productToDelete) => {
    const existingItem = cartItems.find((cartItem) => (cartItem.id === productToDelete.id));
    if (existingItem) {

        return cartItems.filter((cartItem) => (existingItem.id !== cartItem.id))

    }



}




export const addItemsToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)

   return ({
    type:CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload:newCartItems
   })

}

export const removeCartItems = (cartItems, productToReduce) => {
    const newCartItems = decreaseCartItems(cartItems, productToReduce)
    return ({
        type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
        payload: newCartItems
    })
}

export const clearCartItems = (cartItems, productToDelete) => {
    const newCartItems = deleteItem(cartItems, productToDelete)
    return ({
        type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
        payload: newCartItems
    })
}


export const setShowCart = (boolean) => ({

    type: CART_ACTIONS_TYPES.TOGGLE_CART,
    payload: boolean

})


