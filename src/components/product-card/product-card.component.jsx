import React, { useContext } from 'react'
import './product-card.style.scss'
import Button from '../Button/button.component'
import { cartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }) => {


    const { addItemsToCart } = useContext(cartContext)

    const { imageUrl, name, price, id } = product


    const addToCart = () => (
        addItemsToCart(product)

    )

    return (
        <div className='product-card-container' key={id}>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'> {name}</span>
                <span className='price'>{price}$</span>
            </div>

            <Button type='button' buttonType='inverted' onClick={addToCart}> Add To Cart</Button>
        </div>
    )
}

export default ProductCard

