import ShopActionTypes from "./shop.types";

export const UpdatedCollections = (collectionsMap) => ({

    type: ShopActionTypes.UPDATE_SHOP_DATA,
    payload: collectionsMap,

})

