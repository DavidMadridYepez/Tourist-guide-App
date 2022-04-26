import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Services from './pages/services';
import Products from './pages/products';
import GetStarted from './pages/getStarted';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/get-started' element={<GetStarted />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
