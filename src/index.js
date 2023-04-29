import React from 'react';
import './index.scss'
import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { store , persistor} from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <React.StrictMode>

<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
<Router>

<App />
</Router>
</PersistGate>
</Provider>

  </React.StrictMode>
);

