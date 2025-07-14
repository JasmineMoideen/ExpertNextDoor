import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './assets/css/bootstrap.min.css'; 
import './assets/css/font-awesome.min.css'; 
import './assets/css/elegant-icons.css'; 
import './assets/css/flaticon.css'; 
import './assets/css/nice-select.css'; 
import './assets/css/barfiller.css'; 
import './assets/css/magnific-popup.css'; 
import './assets/css/jquery-ui.min.css'; 
import './assets/css/owl.carousel.min.css'; 
import './assets/css/slicknav.min.css';
import './assets/css/style.css'; 
import './assets/sass/style.scss';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
