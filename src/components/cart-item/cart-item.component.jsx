import React from 'react'
import { CartItemDetails, CartItemName, CartItemPrice, CartItemContainer } from './cart-item.styles'


const CartItem = ({cartItem}) => {

  const {name, price, quantity, imageUrl} = cartItem
  return (
    <CartItemContainer>

      <img className='img' src={imageUrl} alt={`${name}`}/>

      <CartItemDetails>

 <CartItemName> {name}</CartItemName>
 <CartItemPrice> {quantity} * {price}</CartItemPrice>
      </CartItemDetails>
    </CartItemContainer>
  )
}

export default CartItem