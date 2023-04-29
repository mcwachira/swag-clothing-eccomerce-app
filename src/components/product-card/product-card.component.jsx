import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { addItemsToCart } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { ProductCardContainer, FooterContainer, ProductName, ProductPrice, } from './product-card.styles'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'


const ProductCard = ({product}) => {
  const dispatch = useDispatch()

  const cartItems =  useSelector(selectCartItems)
    const {name, imageUrl,price } = product

    const addProductToCart =() => dispatch(addItemsToCart(cartItems, product))
  return (
  <ProductCardContainer>
    <img src={imageUrl}  alt={`${name}`}/>

    <FooterContainer>
    <ProductName>{name}</ProductName>
    
    <ProductPrice>{price}</ProductPrice>
        </FooterContainer>

        
        <Button  buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}> Add To Cart</Button>
        
  </ProductCardContainer>
  )
}

export default ProductCard