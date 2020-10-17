import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'; 
export const API_BASE_URL = 'http://localhost:8000/api/';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    
  document.getElementById('root')
);
