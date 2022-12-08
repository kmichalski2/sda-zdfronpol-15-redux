import React from 'react';
import './App.css';
import { Cart } from './features/cart/Cart';
import { Product } from './features/product/Product';

function App() {
  return (
    <div className="App">
        <Cart />

        <Product />
        <Product />
        <Product />
        <Product />
    </div>
  );
}

export default App;
