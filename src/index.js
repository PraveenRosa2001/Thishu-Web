import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeContextProvider from './Context/HomeContext'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </React.StrictMode>
);

reportWebVitals();
