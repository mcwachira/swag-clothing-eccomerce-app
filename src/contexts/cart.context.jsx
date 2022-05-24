import { createContext, useState, useEffect } from "react";

//check if the product exist in the cartItems and if it does the quantity is increased if not a new array is created with the item.
const addCartItem = (cartItems, productToAdd) => {
    //check if the product exist in the cart

    const existingItem = cartItems.find((cartItem) => (cartItem.id === productToAdd.id));

    //if the item exist in the cart update the quantity of the item
    if (existingItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }


    //returning a new item and its quantity
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}






export const cartContext = createContext({
    showCart: false,

    //this points  to a function
    setShowCart: () => { },

    cartItem: [],
    addItemsToCart: () => { },

    cartQuantity: 0,


});


export const CartProvider = ({ children }) => {

    const [showCart, setShowCart] = useState(false)

    const [cartItems, setCartItem] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0)

    const addItemsToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const newCartQuantity = cartItems.reduce((total, item) => (total + item.quantity), 0)
        setCartQuantity(newCartQuantity)
    }


        , [cartItems])

    const value = { showCart, setShowCart, cartItems, addItemsToCart, cartQuantity }

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>

};