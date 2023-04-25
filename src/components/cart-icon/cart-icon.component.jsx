import React,{useContext} from 'react'
import { CartContainer, StyledShoppingIcon, ItemCount } from './cart-icon.styles'

import { CartContext } from '../../context/cart.context'
const CartIcon = () => {


  const {setIsCartOpen , isCartOpen, cartCount} = useContext(CartContext)

  const handleOpen = () => {
    console.log('clicked')
 setIsCartOpen(!isCartOpen)
}
  return (
 <CartContainer onClick={handleOpen}>

<StyledShoppingIcon className='shopping-icon '/>

<ItemCount>{cartCount}</ItemCount>

 </CartContainer>
  )
}

export default CartIcon