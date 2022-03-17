import React from 'react';
import './App.css';

import HomePage from './pages/homepage/HomePage.component'
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>


      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={< Shop />} />

      </Routes>



    </div>
  );
}

export default App;
