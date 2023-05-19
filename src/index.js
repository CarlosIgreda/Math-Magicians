import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/App.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
