import React from 'react'
import { CategoryPreviewContainer, CategoryPreviewLink, Preview } from './category-preview.styles'
import ProductCard from '../product-card/product-card.component'


const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
    <h2>
        <CategoryPreviewLink to={title}>{title.toUpperCase()}</CategoryPreviewLink>
    </h2>
    <Preview>
        {products.filter((_, index) => index <4).map((product) =>  
            <ProductCard product={product} key={product.id}/>)}
    </Preview>
    
    </CategoryPreviewContainer>
    
    )
}

export default CategoryPreview