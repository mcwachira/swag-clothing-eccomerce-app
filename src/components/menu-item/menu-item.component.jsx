import React from 'react'
import { useLocation, useNavigate, } from "react-router";
import './menu-item.styles.scss'
const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
    const navigate = useNavigate();
    // const {pathname} = useLocation();

    return (

        //    <div className={`${size}  menu-item`} onClick={() => navigate(`${pathname}${linkUrl}`)}>
        <div className={`${size}  menu-item`} onClick={() => navigate(`${linkUrl}`)}>

            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>


                <span className="subtitle">
                    hello
                </span>
            </div>
        </div>
    )
}

export default MenuItem;