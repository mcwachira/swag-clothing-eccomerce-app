import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CartItem from '../cart-item/cart-item-component'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button//custom-button.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
const CartDropdown = ({ cartItems, dispatch }) => {
    const navigate = useNavigate()
    return (
        <div className="cart-dropdown">
            <div className="cart-items">


                {
                    cartItems.length ? (

                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))

                    ) : (
                        <span className="empty-message">
                            Your cart is empty
                        </span>
                    )

                }

            </div>
            <CustomButton onClick={() => {
                navigate('/checkout');
                dispatch(toggleCartHidden())

            }}>
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