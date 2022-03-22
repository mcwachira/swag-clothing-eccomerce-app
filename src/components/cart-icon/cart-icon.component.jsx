import React from 'react'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> {itemCount} </span>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



//selector

//old way without using create structured selector

// const matchStateToProps = (state) => ({
//     itemCount: selectCartItemsCount(state)
// })

const matchStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(matchStateToProps, mapDispatchToProps)(CartIcon)