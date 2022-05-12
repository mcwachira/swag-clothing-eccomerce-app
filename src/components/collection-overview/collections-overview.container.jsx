import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector.'
import { compose } from '@reduxjs/toolkit'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview from './collection-overview.component'


const mapStateToProps = createStructuredSelector => ({
    isCollectionFetching: selectIsCollectionFetching,

})


export const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner,

)(CollectionOverview)

export default CollectionContainer