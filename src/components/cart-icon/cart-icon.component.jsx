import React  from 'react'
import { CartContainer, StyledShoppingIcon, ItemCount } from './cart-icon.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount , selectCartIsOpen } from '../../redux/cart/cart.selector'
import { setIsCartOpen } from '../../redux/cart/cart.actions'

const CartIcon = () => {


const dispatch = useDispatch()

const cartCount = useSelector(selectCartCount)
const isCartOpen = useSelector(selectCartIsOpen)


  const toggleIsCartOpen = () => dispatch(setIsCartOpen(isCartOpen));

  return (
 <CartContainer onClick={toggleIsCartOpen}>

<StyledShoppingIcon className='shopping-icon'/>

<ItemCount>{cartCount}</ItemCount>

 </CartContainer>
  )
}

export default CartIcon