import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { DropDownContainer, EmptyMessage, ItemsCart } from './cart-dropdown.styles'
import {  useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'

const CartDropdown = () => {
    const navigate = useNavigate()

    const gotToCheckout = () => (
        navigate('/checkout')
    )
    const cartItems  = useSelector(selectCartItems)
    return (
        <DropDownContainer>


            <ItemsCart>

                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : <EmptyMessage> Nothing is in your cart</EmptyMessage>}

            </ItemsCart>

            <Button onClick={gotToCheckout}>

                CHECKOUT
            </Button>
        </DropDownContainer>
    )
}

export default CartDropdown