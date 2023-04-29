import { createAction } from "../../utils/reducer/createAction"
import { CART_ACTION_TYPES } from "./cart.types"



//helper functions to add items to cart
const addCartItems = ( cartItems, productToAdd) => {

    //check if exist in the cart

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem){
        //if existingCartItem is found its quantity is increased
        return cartItems.map((cartItem) =>  cartItem.id ===  productToAdd.id ? {...cartItem,quantity:cartItem.quantity +1 } :cartItem)
    }


    //if no existing cart item 
    return[...cartItems, {...productToAdd, quantity:1}]
}

const removeCartItems = ( cartItems, productToRemove) => {

    //check if exist in the cart

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)


    //existing cart item quantity is one remove it from cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id ) 
     }
 
        //if existingCartItem is found its quantity is increased
        return cartItems.map((cartItem) =>  cartItem.id ===  productToRemove.id ? {...cartItem,quantity:cartItem.quantity -1 } :cartItem)

    }


const deleteCartItems = ( cartItems, productToDelete) => {
    
 return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id )  
}


export const addItemsToCart = (cartItems, productToAdd) => {
const newCartItems = (addCartItems(cartItems, productToAdd))
return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const removeItemsFromCart = (cartItems, productToRemove) => {
    const newCartItems = (removeCartItems(cartItems, productToRemove))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
    }


    export  const deleteItemsInCart = (cartItems, productToRemove) => {
        const newCartItems = (deleteCartItems(cartItems, productToRemove))
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
        }

 export const   setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean)
 