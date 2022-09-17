import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import ProductList from './pages/ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ProductList />
  </>
);
