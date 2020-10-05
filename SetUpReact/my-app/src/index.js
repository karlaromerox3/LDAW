import React from 'react';
import ReactDOM from 'react-dom';
import Header1 from './components/Header1';
import './index.css';
import App from './App';
<<<<<<< HEAD
import ModalROferta from './components/ModalROferta';
import ModalMisOfertas from './components/ModalMisOfertas';
import ModalVerDatos from './components/ModalVerDatos';
import * as serviceWorker from './serviceWorker';
=======
>>>>>>> Mariana/Componentes
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'; 
import Search from './components/Search';
import CardNR from './components/CardNR';


ReactDOM.render(
  <React.StrictMode>
    <App />
<<<<<<< HEAD
    <Header1 />
    <ModalROferta/>
    
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

    <ModalVerDatos 
      nombre = 'Mariana Favarony'
      cel = '4423567462'
      correo = 'ejemplo@gmail.com'
    />
=======
   

>>>>>>> Mariana/Componentes
  </React.StrictMode>,
    
  document.getElementById('root')
);

<<<<<<< HEAD
ReactDOM.render(
  <Search />,
document.getElementById('root1')
);
ReactDOM.render(
  <CardNR />,
document.getElementById('root2')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======

>>>>>>> Mariana/Componentes
