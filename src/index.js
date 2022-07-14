import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CountryStateProvider from './context/CountryStateProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountryStateProvider>
      <App />
    </CountryStateProvider>
  </React.StrictMode>
);
