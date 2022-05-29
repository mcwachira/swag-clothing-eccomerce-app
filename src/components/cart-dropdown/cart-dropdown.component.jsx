import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { cartContext } from '../../contexts/cart.context'
import { DropDownContainer, EmptyMessage, ItemsCart } from './cart-dropdown.styles'

const CartDropdown = () => {
    const navigate = useNavigate()

    const gotToCheckout = () => (
        navigate('/checkout')
    )
    const { cartItems } = useContext(cartContext)
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