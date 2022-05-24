import React from 'react'
import './cart-item.styles.scss'
const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <div className='cart-item-container' >
            <img className='img' src={imageUrl} alt={`${name}`} />

            <div className="item-details ">



                <span className='name'>
                    {name}
                </span>




                <span className="price">{quantity} * ${price}</span>
                <span>  </span>



            </div>
        </div>
    )
}

export default CartItem