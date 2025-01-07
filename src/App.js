import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="Mens" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="Womens" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="Kids" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
