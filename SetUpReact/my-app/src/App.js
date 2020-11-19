import React, { Component } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

//COMPONENTS
import MainViewU from './views/MainViewU';
import MainViewR from './views/MainViewR';
import RegistrarJuego from './views/RegistrarJuego';
import MisJuegos from './components/MisJuegos';
import VerJuegos from "./components/VerJuegos";
//STYLES
import './App.css';

//API CALLS
export const API_BASE_URL = 'http://localhost:8000/api/';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          
          <PrivateRouter path="/registrado" component={MainViewR}/>  

          <PublicRouter path="/" component={MainViewU} />  
          
          <Route path="/juego" exact></Route>

          <Route path="/RegistrarJuego/:id" exact><RegistrarJuego/></Route>

         <Route path="/VerJuegos/:id" exact><VerJuegos/></Route> 

         <Route path="/MisJuegos/:id" exact><MisJuegos/></Route> 
      </BrowserRouter>
    </div>
  );
}

export default App;
