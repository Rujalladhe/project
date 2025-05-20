import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './components/contactform';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       
        <Route path="/about" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
