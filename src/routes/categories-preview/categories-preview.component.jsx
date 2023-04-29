import React from 'react'
import {useSelector}  from 'react-redux'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { selectCategoryIsLoading ,selectCategoryReducer } from '../../redux/category/category.selector';

const CategoriesPreview = () => {
  const isLoading = useSelector(selectCategoryIsLoading)
  const categories = useSelector(selectCategoryReducer)


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