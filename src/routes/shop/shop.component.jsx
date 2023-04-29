import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import { useDispatch } from 'react-redux'
import { fetchCategoriesAsync} from '../../redux/category/category.actions'
const Shop = () => {


  const dispatch = useDispatch()

  //code to fetch data from our firestore
  useEffect(() => {
    const getCategoriesMap = async() => {
       
        dispatch(fetchCategoriesAsync())
    }

    getCategoriesMap()
})


  return (
<Routes>
  <Route index element={<CategoriesPreview/>}/>
  <Route path=":category" element={<Category/>}/>
</Routes>
   
  )
}

export default Shop