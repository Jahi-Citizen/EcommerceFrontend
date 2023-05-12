import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Components/Homepage/Homepage';
import LoginForm from './Components/Login/Login';
import RegistrationForm from './Components/Registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Catalog from './Components/Catalog/Catalog';
import Checkout from './Components/Checkout/Checkout';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Login" element={<Login/>} />
    <Route path="/Register"  element={<Registration/>}/>
    <Route path="/Catalog" element={<Catalog/>}/>
    <Route path="/Checkout" element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
