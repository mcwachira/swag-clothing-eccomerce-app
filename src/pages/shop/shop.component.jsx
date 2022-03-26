import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import SHOP_DATA from '../../redux/shop/shop.data';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const Shop = () => {


    return (
        <div className='shop-page'>


            <Routes>
                <Route path='/' element={<CollectionsOverview />} />
                <Route path='/:collectionId' element={<CollectionPage />} />


            </Routes>



        </div>
    );
}



export default Shop;