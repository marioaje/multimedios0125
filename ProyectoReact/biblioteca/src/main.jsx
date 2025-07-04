import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client' //render del cliente
import { BrowserRouter } from 'react-router-dom'; //la navegacion
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
