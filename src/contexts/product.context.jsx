import { createContext, useState } from "react";

import Products from '../shop-data.json'
export const productContext = createContext({
    products: [],
})


export const ProductProvider = ({ children }) => {

    //we are setting our initial state to our products data
    const [products, setProduct] = useState(Products);
    const value = { products }

    return <productContext.Provider value={value}>{children}</productContext.Provider>

}