import React from 'react'
import { DropDownContainer, EmptyMessage,ItemsCart  } from './cart-dropdown.styles'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'


const CartDropDown = () => {

  const cartItems =  useSelector(selectCartItems)

  const navigate = useNavigate()


  const goToCheckOutHandler  = () => {
    navigate('/checkout')
  }
  return (
    <DropDownContainer>

        
        <ItemsCart>

{cartItems.length ? (cartItems.map((item) => <CartItem key={item.id}  cartItem={item}/>)) : <EmptyMessage>Nothing is in your cart</EmptyMessage>}


        </ItemsCart>
        <Button onClick={goToCheckOutHandler }>
          Go  CheckOut
        </Button>
        
    </DropDownContainer>
  )
}

export default CartDropDown