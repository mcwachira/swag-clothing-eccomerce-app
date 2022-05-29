import React from 'react'
import { CartItemContainer, CartItemDetails, CartItemName } from './cart-item.styles'
const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <CartItemContainer  >
            <img className='img' src={imageUrl} alt={`${name}`} />

            <CartItemDetails>



                <CartItemName>
                    {name}
                </CartItemName>




                <span className="price">{quantity} * ${price}</span>




            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem