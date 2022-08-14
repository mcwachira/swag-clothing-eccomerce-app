import React, { useContext } from 'react'
import { CartIconContainer, ItemCount, StyledShoppingIcon } from './cart-icon.styles'
import { useDispatch , useSelector } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartCount, selectIsCartOpen } from '../../redux/cart/cart.selector'
import { setShowCart } from '../../redux/cart/cart.actions'
const CartIcon = () => {
const dispatch = useDispatch()
const cartCount = useSelector(selectCartCount)
const showCart = useSelector(selectIsCartOpen)

    const toggleCart = () => dispatch(setShowCart(!showCart))
    return (
        <CartIconContainer onClick={toggleCart} >
            <StyledShoppingIcon className="shopping-icon" />

            <ItemCount className='item-count'>{cartCount}</ItemCount>

        </CartIconContainer>
    )
}

export default CartIcon