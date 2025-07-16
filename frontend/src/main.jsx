// NODE MODULES
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// CSS LINKS
import './index.css';

// ROOT LAYOUT...
import App from './App.jsx';

// ROUTER...
import router from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
