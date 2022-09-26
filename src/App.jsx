import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//BrowserRouter as Router: Básicamente está renomendo o BroserRouter para Router.

import Home from "./pages/Home";
import Product from './pages/Product/Product';
import Register from './pages/User/Register';
import Login from './pages/User/Login';
import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/ProductList/ProductList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/productlist" element={<ProductList />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
