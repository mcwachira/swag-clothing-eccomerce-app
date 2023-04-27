import React, {useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import { ProductCardContainer, FooterContainer, ProductName, ProductPrice, } from './product-card.styles'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'


const ProductCard = ({product}) => {
 
  const { addItemsToCart} = useContext(CartContext)
    const {name, imageUrl,price } = product

    const addProductToCart =() => addItemsToCart(product)
  return (
  <ProductCardContainer>
    <img src={imageUrl}  alt={`${name}`}/>

    <FooterContainer>
    <ProductName>{name}</ProductName>
    
    <ProductPrice>{price}</ProductPrice>
        </FooterContainer>

        
        {/* <Button  buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}> Add To Cart</Button> */}
        
  </ProductCardContainer>
  )
}

export default ProductCard