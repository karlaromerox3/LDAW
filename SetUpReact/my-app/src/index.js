import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ModalROferta from './components/ModalROferta';
import ModalMisOfertas from './components/ModalMisOfertas';
import Dropdown from './components/Dropdown';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'; 


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ModalROferta/>
    {/*<Dropdown  
      items = {[
        {value: 'United States', id: 1},
        {value: 'Mexico', id: 2},
        {value: 'Canada', id: 3},
        {value: 'Alaska', id: 4}
      ]}
    />*/}
    <ModalMisOfertas 
      tituloQ = 'Fall Guys'
      dueñoQ = 'Valeria Guerra de la O'
      edicionQ = 'Ultimate Knockout'
      versionQ = '8.5'
      consolaQ = 'Switch'
      condicionesQ = 'Este juego lo compre en el año... y se encuentra en buenas condiciones...'

      tituloO = 'Mario Kart'
      dueñoO = 'María Sandoval Arrieta'
      edicionO = 'Deluxe'
      versionO = '8'
      consolaO = 'Switch'
      condicionesO = 'Este juego lo compre en el año... y se encuentra en buenas condiciones...'
      
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
