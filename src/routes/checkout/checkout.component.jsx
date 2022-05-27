import React, { useContext } from 'react'
import './checkout.styles.scss'
import { cartContext } from '../../contexts/cart.context'
import CartItem from '../../components/cart-item/cart-item.component'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'

const CheckOut = () => {

    const { cartItems, addItemsToCart, removeCartItems, deleteCartItem, cartTotal } = useContext(cartContext)

    // const addToCart = () => (
    //     addItemsToCart(CartItem)

    // )
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
                <CheckOutItem key={cartItem.id} cartItem={cartItem} deleteCartItem={deleteCartItem} addItemsToCart={addItemsToCart} removeCartItems={removeCartItems} />
            )

            )}
            <span className="total"> Total:${cartTotal}</span>



        </div >
    )
}

export default CheckOut