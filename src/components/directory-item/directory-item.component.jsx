import React from 'react'
import { DirectoryContainer, DirectoryBodyContainer } from './directory-item.styles';
import { useNavigate } from 'react-router-dom'


const DirectoryItem = ({ category }) => {

    const Navigate = useNavigate();

    const onNavigate = () => Navigate(route)
    console.log(category)
    const { title, imageUrl, route } = category;
    console.log(title)
    return (



        <DirectoryContainer>

            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />


            <DirectoryBodyContainer onClick={onNavigate}>
                <h2>
                    {category.title}
                </h2>
                <p>
                    Shop now
                </p>
            </DirectoryBodyContainer>

        </DirectoryContainer>


    )
}

export default DirectoryItem;