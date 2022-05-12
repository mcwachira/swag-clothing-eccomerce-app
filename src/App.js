import React, { useEffect } from 'react';
import './App.css';

import HomePage from './pages/homepage/HomePage.component'
import { Route, Routes, Navigate } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/users.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
// import { selectCollectionOverview } from './redux/shop/shop.selector.'
const App = ({ setCurrentUser, collectionArray, currentUser }) => {




  //property to prevent memory leaks in our app


  useEffect(() => {
    let unsubscribeFromAuth = null;
    //observable of onAuthStateChange
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {

          //set state is asynchronous
          setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()

          })
        })
      }
      setCurrentUser(userAuth)

      //used to add data to our firebase database
      // addCollectionAndDocuments('collection', collectionArray.map(({ title, items }) => ({
      //   title, items

      // }))
      // )
    })
    return () => {

      unsubscribeFromAuth()
    }

  }, [setCurrentUser])

  return (
    <div>

      {/* Header outside the routes as routes so as to appear every page our app . as Navigation  */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={< CheckoutPage />} />
        <Route path="/signin" element={currentUser ? (<Navigate to='/' />) : (<SignInSignUp />)} />
      </Routes>



    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

  //used to add data to our firebase database
  // collectionArray: selectCollectionOverview,
})


//get the action 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
