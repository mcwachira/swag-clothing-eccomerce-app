import { CATEGORIES_ACTION_TYPE } from "./category.types.js";
import { createAction } from "../../utils/reducer/createAction"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";


export  const setCategoriesMap = (categoryMap) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoryMap)



export const  fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)
export const  fetchCategoriesSuccess= (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,categoriesArray)

export const  fetchCategoriesFailed= (error) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)

//thunk


export const fetchCategoriesAsync = () => {
    return async (dispatch) => {
      dispatch(fetchCategoriesStart());
      try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        dispatch(fetchCategoriesFailed(error));
      }
    };
  };


