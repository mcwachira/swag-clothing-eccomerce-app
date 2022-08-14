import React from 'react'
import { useSelector } from 'react-redux'
import { SelectCartTotal,  selectCartItems } from '../../redux/cart/cart.selector'
import './checkout.styles.scss'

import CartItem from '../../components/cart-item/cart-item.component'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'

const CheckOut = () => {

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(SelectCartTotal)
    return (

        <div className='checkout-container'>

            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">

                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Price
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Remove
                    </span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            )

            )}
            <span className="total"> Total:${cartTotal}</span>



        </div >
    )
}

export default CheckOut