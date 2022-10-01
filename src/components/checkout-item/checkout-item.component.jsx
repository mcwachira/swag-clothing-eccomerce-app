import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemsToCart, removeCartItems, clearCartItems } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { CheckOutItemContainer } from './checkout-item.styles.'

const CheckOutItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)

    const addItemHandler = () => dispatch(addItemsToCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeCartItems(cartItems, cartItem))
    const clearItemHandler = () => dispatch(clearCartItems(cartItems, cartItem))
    const { name, imageUrl, quantity, price } = cartItem;

    return (


        <CheckOutItemContainer >

            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />

            </div>

            <span className="name">
                {name}
            </span>

            <div className="quantity">
                <span className='arrow' onClick={removeItemHandler}>&#60;</span>
                <span className="value">
                    {quantity}
                </span>
                <span className='arrow' onClick={addItemHandler}>&#62;</span>
            </div>

            <span className="price">
                {price}
            </span>

            <div className="remove-button" onClick={clearItemHandler}>
                &#10005;
            </div>
        </CheckOutItemContainer>




    )
}

export default CheckOutItem
