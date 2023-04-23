import React from 'react';
import './index.scss'
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router} from 'react-router-dom'
import { UserProvider } from './context/user.context';
import App from './App';
import { ProductProvider } from './context/product.context';
import { CartProvider } from './context/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <React.StrictMode>

<Router>
  <UserProvider>
    <ProductProvider>
      <CartProvider>
      <App />
      </CartProvider>

    </ProductProvider>

  </UserProvider>


</Router>

        


  </React.StrictMode>
);

