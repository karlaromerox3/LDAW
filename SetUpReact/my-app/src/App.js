import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login'
//import NotFound from './Pages/NotFound'
import Register from './components/Register'
import MainViewU from './views/MainViewU';
import MainViewR from './views/MainViewR';
import Dashboard from './components/Dashboard'

function App() {
  return (
<Router>
  <Navbar bg="dark" variant="dark" expand="lg">
     <Navbar.Brand href="#home">React-JWT Login</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />  
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
           <Nav.Link href='/login'>Login</Nav.Link>
           <Nav.Link href='/register'>Register</Nav.Link>
         </Nav>
       </Navbar.Collapse>
   </Navbar>
         <Switch>
         <Route exact path="/" component={MainViewU} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/registrado" component={MainViewR} />

      </Switch>
    </Router>
  );
}
export default App;


/*import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import PrivateRoute from './components/PrivateRoute';

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
     `` <PrivateRouter path="/registrado" component={MainViewR}/>  
          <PublicRouter path="/" component={MainViewU} />  
          <Route path="/registrado" component={MainViewR}/>  
          <Route path="/juego" exact></Route>

          <Route path="/RegistrarJuego/:id" exact><RegistrarJuego/></Route>

         <Route path="/VerJuegos/:id" exact><VerJuegos/></Route> 

         <Route path="/MisJuegos/:id" exact><MisJuegos/></Route> 
         </BrowserRouter>

   </div>
  );
}

export default App;*/

