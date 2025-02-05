import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


if (process.env.NODE_ENV === 'production') {
  console.log = () => {}; // Disable console.log in production
} else {
  console.log("Development mode: console logs are enabled.");
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
