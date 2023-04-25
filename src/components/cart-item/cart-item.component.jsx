import React from 'react'
import { CartItemDetails, CartItemName, CartItemPrice, cartItemContainer } from './cart-item.styles'


const CartItem = ({cartItem}) => {

  const {name, price, quantity, imageUrl} = cartItem
  return (
    <cartItemContainer>

      <img className='img' src={imageUrl} alt={`${name}`}/>

      <CartItemDetails>

 <CartItemName> {name}</CartItemName>
 <CartItemPrice> {quantity} * {price}</CartItemPrice>
      </CartItemDetails>
    </cartItemContainer>
  )
}

export default CartItem