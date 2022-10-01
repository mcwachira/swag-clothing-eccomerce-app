import React from 'react'
import { CategoryPreviewContainer, CategoryLink, Preview } from './category-preview.styles'
import ProductCard from '../product-card/product-card.component'
const CategoryPreview = ({ products, title }) => {
    return (
        <CategoryPreviewContainer>

            <h2>
                <CategoryLink className="title" to={title}>
                    {title.toUpperCase()}
                </CategoryLink>
            </h2>

            <Preview>

                {
                    products
                        .filter((_, index) => index < 4)
                        .map((product) => (<ProductCard key={product.id} product={product} />))
                }
            </Preview>

        </CategoryPreviewContainer>
    )
}

export default CategoryPreview