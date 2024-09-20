import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/App.scss';
import { ThemeProvider } from './context/ThemeContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
