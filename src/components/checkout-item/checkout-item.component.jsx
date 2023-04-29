import React from 'react'
import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
  } from './checkout-item.styles';
import { addItemsToCart, removeItemsFromCart, deleteItemsInCart} from '../../redux/cart/cart.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector.js'
const CheckoutItem = ({cartItem}) => {


    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const { name,imageUrl,  quantity, price} = cartItem
    
  return (
  
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemsFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemsToCart}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={deleteItemsInCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>

  )
}

export default CheckoutItem

