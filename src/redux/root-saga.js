 import {all, call } from 'redux-saga/effects'
 import { categorySaga } from './category/category.saga'

 //generator function 
 export  function* rootSaga(){

    yield all[call(categorySaga)]
 }