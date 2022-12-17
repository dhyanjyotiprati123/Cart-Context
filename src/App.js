import React from 'react';
import Navbar from './Components/Navbar';
import "./Style/main.css";
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App