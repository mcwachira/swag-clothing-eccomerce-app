import React from 'react'
import './directory-item.styles.scss'
import { useNavigate } from 'react-router-dom'


const DirectoryItem = ({ category }) => {

    const Navigate = useNavigate();

    const onNavigate = () => Navigate(route)
    console.log(category)
    const { title, imageUrl, route } = category;
    console.log(title)
    return (



        <div className="directory-container">

            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />


            <div className="directory-body-container" onClick={onNavigate}>
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

export default DirectoryItem;