import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

reportWebVitals();
