import ShopActionTypes from "./shop.types";

import {
    firestore, convertCollecti
    
    
    ToMaps
} from "../../firebase/firebase.utils";
export const UpdatedCollections = (collectionsMap) => ({

    type: ShopActionTypes.UPDATE_SHOP_DATA,
    payload: collectionsMap,

})



export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = errMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errMessage
})

export const fetchCollectionAsync = () => {

    return dispatch => {
        const collectionRef = firestore.collection('collectionsSnapshot');
        dispatch(fetchCollectionStart())

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapShotToMaps(snapshot)
            dispatch(fetchCollectionSuccess(collectionsMap))


        }).catch(error => dispatch(fetchCollectionFailure(error.message)))



    }
}