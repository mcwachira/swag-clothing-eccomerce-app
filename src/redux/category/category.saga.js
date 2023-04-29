import { takeLatest, all,call , put} from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPE } from "./category.types.js"


import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesFailed, fetchCategoriesSuccess } from "./category.actions";




  export function* fetchCategoriesAsync() {
    try {
        //call is used  to turn an action into an effect
        const categoriesArray = yield  call(getCategoriesAndDocuments ,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield put(fetchCategoriesFailed(error));
      }
  }

export function* onFetchCategories() {
    //returns the latest action
yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,  fetchCategoriesAsync )
}

export  function* categoriesSaga(){
    //all waits until all the code is executed
    
    yield  all([call(onFetchCategories)])
  }