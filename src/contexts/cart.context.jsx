import { createContext,  useReducer} from "react";
import { createAction } from "../utils/reducer/reducer";

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


export const cartContext = createContext({
    showCart: false,

    //this points  to a function
    setShowCart: () => { },

    cartItems: [],
    setCartItems: () => {},
    addItemsToCart: () => { },

    cartQuantity: 0,


    removeCartItems: () => { },


    deleteCartItem: () => { },

    cartTotal: 0,

});

const INITIAL_STATE = {
    showCart: false,
    cartItems: [],
    cartQuantity: 0,
    cartTotal: 0,
    setShowCart: () => { },


}
const CART_ACTIONS_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    TOGGLE_CART: 'TOGGLE_CART',
    DELETE_CART_ITEM: 'DELETE_CART_ITEM'
}
const cartReducer = (state, action) => { 
    const { type, payload } = action


    switch (type) {
        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload

            }

        case CART_ACTIONS_TYPES.TOGGLE_CART:
            return{
                ...state,
                showCart:payload

            }   


        default:
            throw new Error(`unhandled type of ${type} in cart Reducer`)

    }
} 


export const CartProvider = ({ children }) => {
const[{cartItems, cartQuantity, cartTotal, showCart}, dispatch] = useReducer(cartReducer, INITIAL_STATE)


    const updateCartItemsReducer = (newCartItems) => {

   const newCartQuantity =  newCartItems.reduce((total, item) => (total + item.quantity), 0)
     const newCartTotal =  newCartItems.reduce((total, item) => (total + item.quantity * item.price), 0)



    dispatch({
        type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
        payload:{
            cartItems:newCartItems,
            cartTotal:newCartTotal,
            cartQuantity:newCartQuantity ,
           
        }

    })
  
    }

    const setShowCart = (newShowCart) => {
        dispatch({
            type: CART_ACTIONS_TYPES.TOGGLE_CART,
            payload:newShowCart
        })

    }



    const addItemsToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)

    }

    const removeCartItems = (productToReduce) => {
        const newCartItems = decreaseCartItems(cartItems, productToReduce)
        updateCartItemsReducer(newCartItems)
    }

    const deleteCartItem = (productToDelete) => {
        const newCartItems = deleteItem(cartItems, productToDelete)
        updateCartItemsReducer(newCartItems)
    }

    // const cartTotal = (cartItems) => {

    // }


    const value = {
        showCart, cartItems,setShowCart,  addItemsToCart, cartQuantity, removeCartItems, deleteCartItem, cartTotal
    }

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>

};