import React, { useContext } from 'react'
import { CartIconContainer, ItemCount, StyledShoppingIcon } from './cart-icon.styles'

import { cartContext } from '../../contexts/cart.context'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
const CartIcon = () => {



    const { showCart, setShowCart, cartQuantity } = useContext(cartContext)

    const toggleCart = () => setShowCart(!showCart)
    return (
        <CartIconContainer onClick={toggleCart} >
            <StyledShoppingIcon className="shopping-icon" />

            <ItemCount className='item-count'>{cartQuantity}</ItemCount>

        </CartIconContainer>
    )
}

export default CartIcon