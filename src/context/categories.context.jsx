import { createContext , useState, useEffect } from "react";
import SHOP_DATA  from '../shop-data.js'
import { addCollectionsAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
   categories:{},
    //setProducts:() => null
})



export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState({})


    // useEffect(() => {
    //     addCollectionsAndDocuments('categories', SHOP_DATA)
    // }, [])
    // setCategories({...categories, SHOP_DATA})


    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments()

            setCategories(categoryMap)
        }

        getCategoriesMap()
    })
    const value ={
       categories,

    }
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}