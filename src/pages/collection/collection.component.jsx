import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selector.'
import './collection.styles.scss'


const CollectionPage = ({ collection }) => {

    const params = useParams()
    console.log(params)
    // console.log(collectionId)
    const { title, items } = collection
    console.log('collection')
    return (
        <div className="collection-page">
            <h2 className="title">
                {title}
            </h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem id={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({

    collections: selectCollection(ownProps.match.params.collectionId)(state)



})



export default connect(mapStateToProps)(CollectionPage)