import { useEffect } from "react";
import Home from "./routes/home/home .component";
import { Routes, Route } from 'react-router-dom'
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/auth/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils'
import { setCurrentUser } from "./redux/user/user.action";
import { useDispatch } from "react-redux";
const App = () => {
const dispatch = useDispatch()

  useEffect(() => {

    //used to clean up the method
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      console.log(user)
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])


  return (

    <div>

      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="/authentication" element={<Authentication />} />

          <Route path="/checkout" element={<CheckOut />} />

        </Route>



      </Routes>

    </div>

  );
}

export default App;
