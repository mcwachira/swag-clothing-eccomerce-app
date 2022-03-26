import { createSelector } from "reselect";


const selectShop = state => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionOverview = createSelector(
    [selectCollections],

    //getting the value of value of collections object at the specific key
    collections => Object.keys(collections).map((key) => collections[key])
)

export const selectCollection = collectionsUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionsUrlParam]
)