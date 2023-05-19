import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <Routes>
      <Route path="/Math-Magicians" element={<Home />} />
      <Route path="/Math-Magicians/calculator" element={<Calculator />} />
      <Route path="/Math-Magicians/quote" element={<Quote />} />
    </Routes>
  );
}

export default App;
