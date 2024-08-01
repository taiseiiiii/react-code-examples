import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Router } from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
