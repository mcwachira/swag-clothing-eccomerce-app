import { createContext, useState, useEffect } from "react";

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

    cartItem: [],
    addItemsToCart: () => { },

    cartQuantity: 0,


    removeCartItems: () => { },


    deleteCartItem: () => { },

    cartTotal: 0,

});


export const CartProvider = ({ children }) => {

    const [showCart, setShowCart] = useState(false)

    const [cartItems, setCartItem] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0)
    const [cartTotal, SetCartTotal] = useState(0)

    const addItemsToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd))
    }

    const removeCartItems = (productToReduce) => {
        setCartItem(decreaseCartItems(cartItems, productToReduce))
    }

    const deleteCartItem = (productToDelete) => {
        setCartItem(deleteItem(cartItems, productToDelete))
    }

    // const cartTotal = (cartItems) => {

    // }

    useEffect(() => {
        const newCartQuantity = cartItems.reduce((total, item) => (total + item.quantity), 0)
        setCartQuantity(newCartQuantity)
    }


        , [cartItems])


    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, item) => (total + item.quantity * item.price), 0)
        SetCartTotal(newCartTotal)
    }


        , [cartItems])
    const value = {
        showCart, setShowCart, cartItems, addItemsToCart, cartQuantity, removeCartItems, deleteCartItem, cartTotal
    }

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>

};