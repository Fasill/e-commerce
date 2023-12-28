import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; 
import userReducer from './store/user.js';
import jobsSlice from './store/Jobs.js';
import navSlice  from './store/navbar.js';
const store = configureStore({
  reducer: {
    user: userReducer,
    jobs:jobsSlice,
   
    nav: navSlice,
    // You can add more reducers here if needed
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);