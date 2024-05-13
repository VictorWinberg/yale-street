import React from 'react';
import { createRoot } from 'react-dom/client';

// project imports
import App from './App';

// style + assets
import '@/assets/scss/style.scss';
import reportWebVitals from '@/reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);

// ==============================|| REACT DOM RENDER  ||============================== //

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
