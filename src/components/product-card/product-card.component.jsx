import React, { useContext } from 'react'
import { ProductCardContainer, FooterContainer, ProductName, ProductPrice, } from './product-card.style'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component'
import { useDispatch , useSelector } from 'react-redux'
import { addItemsToCart } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selector'


const ProductCard = ({ product }) => {

const dispatch = useDispatch()
    

    const { imageUrl, name, price, id } = product
    const cartItems = useSelector(selectCartItems)

    const addToCart = () => 
        dispatch(addItemsToCart(cartItems,product))
        

    

    return (
        <ProductCardContainer key={id}>
            <img src={imageUrl} alt={name} />
            <FooterContainer>
                <ProductName className='name'> {name}</ProductName>
                <ProductPrice className='price'>{price}$</ProductPrice>
            </FooterContainer>

            <Button type='button' buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}> Add To Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard

