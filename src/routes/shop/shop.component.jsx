import React, { useEffect } from 'react'
import './shop.styles.scss'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { setCategoriesMap } from '../../redux/category/category.actions'
const Shop = () => {


  const dispatch = useDispatch()

  //code to fetch data from our firestore
  useEffect(() => {
    const getCategoriesMap = async() => {
        const categoriesMap = await getCategoriesAndDocuments('categories')
        console.log(categoriesMap)
        dispatch(setCategoriesMap(categoriesMap))
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