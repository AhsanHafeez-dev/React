import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx';
const reactElement= React.createElement('a',{href:"https://facebook.com",target:"_blank"},"click here")

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
