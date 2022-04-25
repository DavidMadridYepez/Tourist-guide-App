import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Services from './pages/services';
import Products from './pages/products';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Services />
      <Products />
    </BrowserRouter>
  );
}

export default App;
