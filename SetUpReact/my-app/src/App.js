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
import VerMisOfertas from "./components/VerMisOfertas";
import RegistrarOferta from "./views/RegistrarOferta";
import ModificarOferta from "./views/ModificarOferta";
import VerOfertas from "./components/VerOfertas";
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

         <Route path="/RegistrarOferta/:idGame/:idUsuario" exact><RegistrarOferta/></Route>
         <Route path="/MisOfertas/:idUsuario" exact ><VerMisOfertas/> </Route>
         <Route path="/VerJuegos/:id" exact><VerJuegos/></Route> 
         <Route path="/VerOfertas/:idGame/:idUsuario" exact><VerOfertas/></Route>
         <Route path="/ModificarOferta/:idOferta/:idUsuario" exact><ModificarOferta/></Route>

         <Route path="/MisJuegos/:id" exact><MisJuegos/></Route> 
      </BrowserRouter>
    </div>
  );
}

export default App;
