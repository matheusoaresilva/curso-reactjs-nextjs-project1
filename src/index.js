import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/Global.css';

import { Home } from './Templates/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
