import React, { useContext } from 'react'
import './cart-icon.styles.scss'

import { cartContext } from '../../contexts/cart.context'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
const CartIcon = () => {



    const { showCart, setShowCart, cartQuantity } = useContext(cartContext)

    const toggleCart = () => setShowCart(!showCart)
    return (
        <div className='cart-icon-container' onClick={toggleCart} >
            <ShoppingIcon className="shopping-icon" />

            <span className='item-count'>{cartQuantity}</span>

        </div>
    )
}

export default CartIcon