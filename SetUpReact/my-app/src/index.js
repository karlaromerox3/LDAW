import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'; 
import { GoogleAuthProvider } from './googleAuth';
export const API_BASE_URL = 'http://localhost:8000/api/';


ReactDOM.render(
<GoogleAuthProvider>
    <App />
  </GoogleAuthProvider>,
    
  document.getElementById('root')
);
