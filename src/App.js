import React from 'react';
import './App.css';

import HomePage from './pages/homepage/HomePage.component'
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop.component';

const HatsPage = () => {
  return (
    <div> <h1>
      Hats Page
    </h1>
    </div>
  )
}
function App() {
  return (
    <div>



      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={< Shop />} />

      </Routes>



    </div>
  );
}

export default App;
