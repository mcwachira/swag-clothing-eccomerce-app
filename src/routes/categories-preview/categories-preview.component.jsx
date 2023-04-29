import React from 'react'
import {useSelector}  from 'react-redux'
import CategoryPreview from '../../components/category-preview/category-preview.component'
const CategoriesPreview = () => {

  const categories = useSelector((state) => state.categories.categories)


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