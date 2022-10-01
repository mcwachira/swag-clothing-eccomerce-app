import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/spinner/spinner.component'

import ProductCard from '../../components/product-card/product-card.component'
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils'

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../redux/category/category.selector'
import {  useSelector} from 'react-redux'
import './category.styles.scss'
// import SHOP_DATA  from '../../shop-data.js'

const Category = () => {


    const { category } = useParams();
    const  categoriesMap  = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    //categoriesMap[category]

    useEffect(() => {
       // addCollectionAndDocuments('categories', SHOP_DATA)
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {isLoading ?( <Spinner />) :( <Fragment>
           
                <div className="category-product-container">

                    {
                        products &&
                        products.map((product) => <ProductCard key={product.id} product={product} />)
                    }

                </div>
            </Fragment>)
            }

        </>
    
       

    )
}

export default Category