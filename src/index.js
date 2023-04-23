import React from 'react';
import './index.scss'
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router} from 'react-router-dom'
import { UserProvider } from './context/user.context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <React.StrictMode>

<Router>
  <UserProvider>
  <App />
  </UserProvider>


</Router>

        


  </React.StrictMode>
);

