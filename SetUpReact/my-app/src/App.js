import React, { Component } from 'react';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegistrarJuego from './views/RegistrarJuego';
import MisJuegos from './components/MisJuegos';
class App extends Component{
  
  
  render() {
    return (
      <Router>
      <div className="Container">
       <Switch>
         <Route path="/" exact>
         <Header1 />
         </Route>
         <Route path="/registrado" exact>
         <Header2 />
         </Route>
         <Route path="/juego" exact>
         <Header3 />
         </Route>
         <Route path="/RegistrarJuego.js" exact>
           <RegistrarJuego/>
         </Route>
         <Route path="/MisJuegos.js" exact>
           <MisJuegos/>
         </Route>
       </Switch>
      </div>
      </Router>
    )
}

}
export default App;

