import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SmoothScroll from './components/SmoothScroll.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
    
  </StrictMode>,
)
