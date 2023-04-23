import React,{useContext} from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
const CartIcon = () => {


  const {setIsCartOpen , isCartOpen} = useContext(CartContext)
  const handleOpen = () => {
    console.log('clicked')
 setIsCartOpen(!isCartOpen)
}
  return (
 <div className='cart-icon-container ' onClick={handleOpen}>

<ShoppingBag className='shopping-icon '/>

<span className='item-count'> 0</span>

 </div>
  )
}

export default CartIcon