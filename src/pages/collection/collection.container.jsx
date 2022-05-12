import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector.';
import { compose } from '@reduxjs/toolkit';
import CollectionPage from './collection.component'



const mapStateToProps = createStructuredSelector => ({
    isLoading: state => !selectIsCollectionLoaded(state),

})


export const CollectionContainerPage = compose(
    connect(mapStateToProps),
    WithSpinner,

)(CollectionPage)

export default CollectionContainerPage