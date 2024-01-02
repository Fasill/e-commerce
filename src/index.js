import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; 

import userReducer from './store/user.js';
import navSideSlice from './store/navSide.js'
import productsSlice from './store/products.js';
import navSlice  from './store/navbar.js';
const store = configureStore({
  reducer: {
    jobs:productsSlice,
    nav: navSlice,
    navSide:navSideSlice
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);