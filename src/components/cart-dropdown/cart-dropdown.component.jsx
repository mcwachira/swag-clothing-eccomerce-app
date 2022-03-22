import React from 'react'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CartItem from '../cart-item/cart-item-component'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button//custom-button.component'
const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">

                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButton>
                CHECKOUT
            </CustomButton>


        </div>
    )
}

// const mapDispatchToProps = (state) => ({
//     cartItems: selectCartItems(state)
// })

//using create structured selector
const mapDispatchToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default connect(mapDispatchToProps)(CartDropdown);