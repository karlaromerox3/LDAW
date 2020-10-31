import React, { Component } from 'react';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import RegistrarJuego from './views/RegistrarJuego';
import MisJuegos from './components/MisJuegos';
import { Route, BrowserRouter} from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import './App.css';

export const API_BASE_URL = 'http://localhost:8000/api/';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <PrivateRouter path="/registrado" component={Header2} />                
          <PublicRouter path="/" component={Header1} />  
          <Route path="/juego" exact>
         <Header3 />
         </Route>
         <Route path="/RegistrarJuego.js" exact>
           <RegistrarJuego/>
         </Route>
         <Route path="/MisJuegos.js" exact>
           <MisJuegos/>
         </Route> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
