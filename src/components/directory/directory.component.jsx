import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'
const Directory = () => {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "./images/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "./images/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "./images/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "./images/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "./images/mens.png"
        }
    ]

    return (
        <div className='categories-container'>

            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}

        </div>
    )
}

export default Directory