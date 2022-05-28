import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { cartContext } from '../../contexts/cart.context'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const navigate = useNavigate()

    const gotToCheckout = () => (
        navigate('/checkout')
    )
    const { cartItems } = useContext(cartContext)
    return (
        <div className='cart-dropdown-container'>


            <div className="cart-items">

                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : <span> Nothing is in your cart</span>}

            </div>

            <Button onClick={gotToCheckout}>

                CHECKOUT
            </Button>
        </div>
    )
}

export default CartDropdown