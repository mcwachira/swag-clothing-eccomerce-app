import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'

import Category from '../category/category.component'
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import {fetchCategoriesAsync} from '../../redux/category/category.action'

import { useDispatch} from 'react-redux'

const Shop = () => {

    const dispatch = useDispatch()
    useEffect(() => {
    
            dispatch(fetchCategoriesAsync())
     
    }, [dispatch])

    return (

        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>

    )
}

export default Shop