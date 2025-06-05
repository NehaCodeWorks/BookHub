import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Components/CartContext';
import { WishlistProvider } from './Components/WishlistContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      <BrowserRouter>
         <CartProvider>
            <WishlistProvider>
               <App />

            </WishlistProvider>
         </CartProvider>

      </BrowserRouter>

   </>
);

