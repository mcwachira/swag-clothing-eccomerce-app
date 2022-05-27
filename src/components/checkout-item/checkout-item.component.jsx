import React from 'react'

import './checkout-item.styles.scss'
const CheckOutItem = ({ cartItem, deleteCartItem, addItemsToCart, removeCartItems }) => {

    const { name, imageUrl, quantity, price } = cartItem;

    return (


        <div className="checkout-item-container" >

            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />

            </div>

            <span className="name">
                {name}
            </span>

            <div className="quantity">
                <span className='arrow' onClick={() => removeCartItems(cartItem)}>&#60;</span>
                <span className="value">
                    {quantity}
                </span>
                <span className='arrow' onClick={() => addItemsToCart(cartItem)}>&#62;</span>
            </div>

            <span className="price">
                {price}
            </span>

            <div className="remove-button" onClick={() => deleteCartItem(cartItem)}>
                &#10005;
            </div>
        </div>




    )
}

export default CheckOutItem
