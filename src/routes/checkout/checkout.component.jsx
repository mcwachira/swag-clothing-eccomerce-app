import React from 'react'
import {CheckoutPageContainer,
    CheckoutPageHeader,
    CheckoutPageHeaderBlock,
    CheckoutPageTotal,} from './checkout.styles'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems , selectCartTotal } from '../../redux/cart/cart.selector'
import { useSelector } from 'react-redux'

const Checkout = () => {

    const cartItems  = useSelector(selectCartItems)

    const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutPageContainer>
   <CheckoutPageHeader>
    <CheckoutPageHeaderBlock>
        <span>Product</span>
    </CheckoutPageHeaderBlock>
    <CheckoutPageHeaderBlock>

        <span>Description </span>
    </CheckoutPageHeaderBlock>
    <CheckoutPageHeaderBlock>

        <span> Quantity</span>
    </CheckoutPageHeaderBlock>
    <CheckoutPageHeaderBlock>
<span>
    Price
</span>
    </CheckoutPageHeaderBlock>
    <CheckoutPageHeaderBlock>

        <span>
            Remove
        </span>

    </CheckoutPageHeaderBlock>
    </CheckoutPageHeader> 
        {cartItems.map((cartItem) => {
            
            return(

           <CheckoutItem key={cartItem.id}  cartItem={cartItem}/>
            
        )
        
            })}

<CheckoutPageTotal>
    Total : ${cartTotal}
</CheckoutPageTotal>
    </CheckoutPageContainer>
  )
}

export default Checkout