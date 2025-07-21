import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
   
    <CartProvider>
     <BrowserRouter>
          <App />
     </BrowserRouter>
    </CartProvider>
 
);
