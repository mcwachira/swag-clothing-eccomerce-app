import React from 'react'
import DirectoryItem from '../directory-item/directory-item'
import { CategoryContainer } from './directory.styles'
const Directory = () => {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "./images/hats.png",
            route: 'shop/hats',
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "./images/jackets.png",
            route: 'shop/jackets',
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "./images/sneakers.png",
            route: 'shop/sneakers',
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "./images/womens.png",
            route: 'shop/womens',
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "./images/mens.png",
            route: 'shop/mens',
        }
    ]

    return (
        <CategoryContainer>

            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}

        </CategoryContainer>
    )
}

export default Directory