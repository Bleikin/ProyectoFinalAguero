import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";
import './index.css';
import { CartProvider } from './components/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyAu0VXZJgKx1mARGU-XbDHYagokPlqJ330",
  authDomain: "proyectofinalaguero-b1555.firebaseapp.com",
  projectId: "proyectofinalaguero-b1555",
  storageBucket: "proyectofinalaguero-b1555.firebasestorage.app",
  messagingSenderId: "989304045673",
  appId: "1:989304045673:web:821f730b222061a60722f8",
  measurementId: "G-QMQKB7K57D"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);