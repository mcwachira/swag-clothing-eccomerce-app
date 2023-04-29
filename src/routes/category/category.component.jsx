import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoryIsLoading ,selectCategoryReducer } from '../../redux/category/category.selector';
import {CategoryContainer,
    CategoryTitle}  from './category.styles'
import Spinner from '../../components/spinner/spinner.component';

const  Category = () => {


    const categories = useSelector(selectCategoryReducer)
    const isLoading = useSelector(selectCategoryIsLoading)
    console.log(categories)

    const {category} = useParams()

 
    const [products, setProducts] =  useState(categories[category])


    useEffect(() => {
        setProducts(categories[category])   
    
    }, [categories, category])

    return (

        <>
          <CategoryTitle>
                {category.toUpperCase()}
            </CategoryTitle>
        
        {isLoading ? <Spinner/> :<div className='category-container'>
          
<CategoryContainer>
{products &&  products.map((product) => <ProductCard key={product.id} product={product}/>)}

</CategoryContainer>
         
      </div>}
            
        </>
      
    )

}
export default Category;