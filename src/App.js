import React from 'react';
import './App.css';

import HomePage from './pages/homepage/HomePage.component'
import { Route, Routes } from 'react-router-dom';

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
        <Route path="/shop/hats" element={<HatsPage />} />

      </Routes>



    </div>
  );
}

export default App;
