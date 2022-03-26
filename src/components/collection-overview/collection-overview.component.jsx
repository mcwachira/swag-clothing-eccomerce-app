import React from 'react'
import './collection-overview.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionOverview } from '../../redux/shop/shop.selector.'

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollections }) => (<CollectionPreview key={id} {...otherCollections} />))}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionOverview
})
export default connect(mapStateToProps)(CollectionsOverview)