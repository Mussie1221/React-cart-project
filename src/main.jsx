import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App/'
import { ShoppingCartProvider } from './Context';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCartProvider>
      <App/>
    </ShoppingCartProvider>
  </StrictMode>,
)
