import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styles — order matters: Tailwind utilities, then Reveal.js, then custom overrides
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
