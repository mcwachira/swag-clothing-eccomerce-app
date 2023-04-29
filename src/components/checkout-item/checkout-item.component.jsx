import React from 'react'
import {CheckOutItemContainer} from './checkout-item.styles.js'
import { addItemsToCart, removeItemsFromCart, deleteItemsInCart} from '../../redux/cart/cart.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector.js'
const CheckoutItem = ({cartItem}) => {


    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const { name,imageUrl,  quantity, price} = cartItem
    
  return (
  
 <CheckOutItemContainer>
<div className="image-container">
    
    <img src={imageUrl} alt={`${name}`} className='img' />
    
    </div>  

<span className="name">
    {name}
</span>
<span className="quantity">
<div className="arrow" onClick={() => dispatch(removeItemsFromCart(cartItems,cartItem))}>
    &#10094;
</div>
<div className="value">
{quantity}
</div>


<div className="arrow" onClick={() => dispatch(addItemsToCart(cartItems,cartItem))}>

&#10095;
</div>
</span>
<span className="price">
    {price}
</span>
<div className="remove-button" onClick={() => dispatch(deleteItemsInCart(cartItems,cartItem))}>&#10005;</div>
 </CheckOutItemContainer>

  )
}

export default CheckoutItem

