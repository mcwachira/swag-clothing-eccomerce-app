import React , {useContext , useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss'
const  Category = () => {

    const {categories} = useContext(CategoriesContext)

    const {category} = useParams()


    const [products, setProducts] =  useState(categories[category])


    useEffect(() => {
        setProducts(categories[category])   
    
    }, [categories, category])

    return (

        <>
          <h2 className="category-title">
                {category.toUpperCase()}
            </h2>
        
            <div className='category-container'>
          

          {products &&  products.map((product) => <ProductCard key={product.id} product={product}/>)}
      </div>
        </>
      
    )

}
export default Category;