import { createContext ,  useReducer} from "react";



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

export const CartContext =  createContext({
    isCarOpen:false,
    setIsCartOpen:() => {},
    cartItems:[],
    addItemsToCart:() => {},
    cartCount:0,
    cartTotal:0,
    removeItemsFromCart:() => {},
    deleteItemsInCart:() => {},

})

export const CART_ACTION_TYPES = {
    IS_CART_OPEN:'IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',

}

export const cartReducer = (state, action) => {

    const {type, payload} = action

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
           
            case CART_ACTION_TYPES.IS_CART_OPEN:
                return {
                    ...state,
                    isCarOpen:payload,
                }
           
    
                    default:
                        throw new Error(`Unhandled type ${type} in userReducer`)
    }

}

const INITIAL_STATE = {
    isCarOpen:true,
 cartItems:[],
cartCount:0,
    cartTotal:0,
}


export const CartProvider = ({children}) => {

    const [{isCartOpen,cartItems, cartCount, cartTotal,}, dispatch] = useReducer(cartReducer, INITIAL_STATE)




 const updateCartItemReducer = (newCartItems) => {

    const newCartCount =newCartItems.reduce(( total, cartItem) =>  cartItem.quantity + total, 0)
    const newCartTotal=newCartItems.reduce(( total, cartItem) =>  total + cartItem.quantity * cartItem.price, 0)

    dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload:{
        cartItems:newCartItems,
        cartCount:newCartCount, 
        cartTotal:newCartTotal
    }})
   
 }

 const   setIsCartOpen = (bool) => {
    dispatch({
        type:CART_ACTION_TYPES.IS_CART_OPEN,
        payload:bool
    })
 }

const addItemsToCart = (productToAdd) => {
const newCartItems = (addCartItems(cartItems, productToAdd))
updateCartItemReducer(newCartItems)
}
const removeItemsFromCart = (productToRemove) => {
    const newCartItems = (removeCartItems(cartItems, productToRemove))
    updateCartItemReducer(newCartItems)
    }


    const deleteItemsInCart = (productToRemove) => {
        const newCartItems = (deleteCartItems(cartItems, productToRemove))
        updateCartItemReducer(newCartItems)
        }
const value ={
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    removeItemsFromCart,
    deleteItemsInCart,
    cartCount,
    cartTotal


}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}