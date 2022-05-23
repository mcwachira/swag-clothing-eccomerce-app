import { createContext, useState } from "react";

export const cartContext = createContext({
    showCart: false,

    //this provides to a function
    setShowCart: () => { },
});


export const CartProvider = ({ children }) => {

    const [showCart, setShowCart] = useState(false)

    const value = { showCart, setShowCart }

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>

};