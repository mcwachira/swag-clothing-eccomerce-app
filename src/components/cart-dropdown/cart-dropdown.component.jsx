import React, { useContext } from 'react'
import Button from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { cartContext } from '../../contexts/cart.context'
import './cart-dropdown.styles.scss'
const CartDropdown = () => {
    const { cartItems } = useContext(cartContext)
    return (
        <div className='cart-dropdown-container'>


            <div className="cart-items">
                {
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </div>

            <Button >CheckOut</Button>
        </div>
    )
}

export default CartDropdown