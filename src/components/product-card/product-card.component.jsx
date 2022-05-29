import React, { useContext } from 'react'
import { ProductCardContainer, FooterContainer, ProductName, ProductPrice, } from './product-card.style'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component'
import { cartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }) => {


    const { addItemsToCart } = useContext(cartContext)

    const { imageUrl, name, price, id } = product


    const addToCart = () => (
        addItemsToCart(product)

    )

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

