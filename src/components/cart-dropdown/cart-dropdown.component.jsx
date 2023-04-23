import React from 'react'
import './cart-item.styles.scss'
import Button from '../button/button.component'

const CartDropDown = () => {
  return (
    <div className='cart-item-container '>

        
        <div className='cart-items'/>
        <Button>
            Go To Checkout
        </Button>
        
    </div>
  )
}

export default CartDropDown