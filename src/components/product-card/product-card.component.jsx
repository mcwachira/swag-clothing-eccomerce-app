import React, {useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import './product-card.styles.scss'
import Button from '../button/button.component'
const ProductCard = ({product}) => {
 
  const { addItemsToCart} = useContext(CartContext)
    const {name, imageUrl,price } = product

    const addProductToCart =() => addItemsToCart(product)
  return (
  <div className='product-card-container'>
    <img src={imageUrl}  alt={`${name}`}/>

    <div  className='footer'>
    <span className='name'>{name}</span>
    
    <span className='price'>{price}</span>
        </div>

        
        <Button type='button' buttonType='inverted'  onClick={addProductToCart} >
            Add To CART
        </Button>
        
  </div>
  )
}

export default ProductCard