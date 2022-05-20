import React from 'react'
import './category-item.styles.scss'
const CategoryItem = ({ category }) => {

    console.log(category)
    const { title, imageUrl } = category;
    console.log(title)
    return (



        <div className="category-container">

            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />


            <div className="category-body-container">
                <h2>
                    {category.title}
                </h2>
                <p>
                    Shop now
                </p>
            </div>

        </div>


    )
}

export default CategoryItem;