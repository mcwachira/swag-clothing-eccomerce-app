import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/homepage/HomePage.component'
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }


  //property to prevent memory leaks in our app
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>


        <Header currentUser={this.state.currentUser} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={< Shop />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>



      </div>
    );
  }
}


export default App;
