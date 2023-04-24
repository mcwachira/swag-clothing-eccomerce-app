import React, {useContext} from 'react'
import {CategoriesContext } from '../../context/categories.context'

import CategoryPreview from '../../components/category-preview/category-preview.component'
const CategoriesPreview = () => {

    const {categories} = useContext(CategoriesContext)


  return (
    <>
    {
      Object.keys(categories).map((title) => {
        const products = categories[title];
      
        return  <CategoryPreview products={products} key={title} title={title}/>
      })
      }

    
    </>
   
  )
}

export default CategoriesPreview