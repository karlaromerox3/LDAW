import React, { Component } from 'react';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';

import logo from './resources/logowobg.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
       </Switch>
      </div>
      </Router>
    )
}

}
export default App;

