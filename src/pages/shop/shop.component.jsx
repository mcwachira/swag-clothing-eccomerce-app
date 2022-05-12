import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import SHOP_DATA from '../../redux/shop/shop.data';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionAsync } from '../../redux/shop/shop.action';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector.';
import { createSelectorCreator } from 'reselect';
import { connect } from 'react-redux';


//importing our spinner
import WithSpinner from '../../components/with-spinner/with-spinner.component';



//passing our spinner to the two routes that need it
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionsPageWithSpinner = WithSpinner(CollectionPage)
import CollectionContainer from '../../components/collection-overview/collections-overview.container'
import CollectionContainerPage from '../collection/collection.container';

const Shop = ({ fetchCollectionAsync }) => {

    useEffect(() => {
        // const { fetchCollectionAsync } = this.props;
        fetchCollectionAsync();

        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionSnapShotToMaps(snapshot)
        //     dispatch(fetchCollectionSuccess(collectionsMap))


        // }).catch(error => dispatch(fetchCollectionFailure(error.message)))

        //using promises to get data
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionSnapShotToMaps(snapshot)
        //     UpdatedCollections(collectionsMap);
        //     console.log(collectionsMap)
        //     this.setState({
        //         loading: false
        //     })

        // })

        //using fetch
        //     fetch('https://firestore.googleapis/v1/projects/swag-ecommerce-db/database/(default)/documents/collections').then(response => response.json()).then(collection => console.log(collection));
        // }
    }, [fetchCollectionAsync])



    // const { isCollectionFetching, isCollectionLoaded } = this.props

    return (

        <div className='shop-page'>


            <Routes>

                {/* <Route exact path={`${match.path}`} element={<CollectionsOverview />} /> */}


                {/* using  a spinner */}
                {/* <Route path='/' element={<CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                    <Route path='/:collectionId' element={<CollectionsPageWithSpinner isLoading={loading} {...props} />} /> */}

                <Route path='/' element={<CollectionContainer />} />
                <Route path='/:collectionId' element={<CollectionContainerPage />} />

            </Routes>



        </div>
    )


}


const mapStateToProps = dispatch => ({
    isCollectionFetching: selectIsCollectionFetching,
    selectIsCollectionLoaded: selectIsCollectionLoaded
})


//get the action 
const mapDispatchToProps = dispatch => ({

    fetchCollectionAsync: () => dispatch(fetchCollectionAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);