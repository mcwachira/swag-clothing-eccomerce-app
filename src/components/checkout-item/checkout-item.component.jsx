import React, { useContext } from 'react'
import {CheckOutItemContainer} from './checkout-item.styles.js'
import { CartContext } from '../../context/cart.context'
const CheckoutItem = ({cartItem}) => {

    const { addItemsToCart, removeItemsFromCart, deleteItemsInCart} = useContext(CartContext)
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
<div className="arrow" onClick={() => removeItemsFromCart(cartItem)}>
    &#10094;
</div>
<div className="value">
{quantity}
</div>


<div className="arrow" onClick={() => addItemsToCart(cartItem)}>

&#10095;
</div>
</span>
<span className="price">
    {price}
</span>
<div className="remove-button" onClick={() => deleteItemsInCart(cartItem)}>&#10005;</div>
 </CheckOutItemContainer>

  )
}

export default CheckoutItem

