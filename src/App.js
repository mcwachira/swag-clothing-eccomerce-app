import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/homepage/HomePage.component'
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/users.actions';
class App extends Component {



  //property to prevent memory leaks in our app
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>


        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={< Shop />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>



      </div>
    );
  }
}


//get the action 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
