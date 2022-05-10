import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import SHOP_DATA from '../../redux/shop/shop.data';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapShotToMaps } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { UpdatedCollections } from '../../redux/shop/shop.action';

//importing our spinner
import WithSpinner from '../../components/with-spinner/with-spinner.component';



//passing our spinner to the two routes that need it
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }

    }



    unsubscribeFromSnapshot = null;

    componentDidMount() {


        const { UpdatedCollections } = this.props;
        const collectionRef = firestore.collection('collectionsSnapshot');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapShotToMaps(snapshot)
            UpdatedCollections(collectionsMap);
            console.log(collectionsMap)
            this.setState({
                loading: false
            })

        })

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
    }


    render() {

        const loading = this.state
        const props = this.props
        return (

            <div className='shop-page'>


                <Routes>

                    {/* <Route exact path={`${match.path}`} element={<CollectionsOverview />} /> */}


                    {/* using  a spinner */}
                    {/* <Route path='/' element={<CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                    <Route path='/:collectionId' element={<CollectionsPageWithSpinner isLoading={loading} {...props} />} /> */}

                    <Route path='/' element={<CollectionsOverview />} />
                    <Route path='/:collectionId' element={<CollectionPage />} />

                </Routes>



            </div>
        )


    }
}



//get the action 
const mapDispatchToProps = dispatch => ({
    UpdatedCollections: collectionsMap => dispatch(UpdatedCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);