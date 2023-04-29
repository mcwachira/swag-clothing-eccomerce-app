import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Home from './routes/home/home.component'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { createUserDocumentFromAuth, onAuthStateChangeListener, getCurrentUser} from './utils/firebase/firebase.utils'
import { CheckUserSession, setCurrentUser } from './redux/user/user.actions'

const App = () => {

const dispatch = useDispatch()
  useEffect(() => {
dispatch(CheckUserSession())
  }, []);

  return (

 <>
 <Routes>
  <Route path='/' element={<Navigation/>}>
  <Route index element={ <Home/>}/>
  <Route path='auth' element={ <Authentication/>}/>
  <Route path='shop/*' element={ <Shop/>}/>
  <Route path='checkout' element={ <Checkout/>}/>
  </Route>
 </Routes>

 </>

  
  )
}

export default App