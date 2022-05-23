import React from 'react'
import './product-card.style.scss'
import Button from '../Button/button.component'

const ProductCard = ({ product }) => {

    const { imageUrl, name, price, id } = product

    return (
        <div className='product-card-container' key={id}>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'> {name}</span>
                <span className='price'>{price}$</span>
            </div>

            <Button type='button' buttonType='inverted'> Add To Cart</Button>
        </div>
    )
}

export default ProductCard

