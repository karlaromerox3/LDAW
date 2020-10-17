import React, { Component } from 'react';
import { Dropdown} from 'react-bootstrap';
import './../App.css';
import logo from './../resources/logowobg.png';

class Header3 extends Component{
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
      <img src={logo} className="App-logo" alt="GAMECH logo" />
        <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic">
    Buenas tardes, nomUsuario
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

  </div>
</nav>





        </div>
      </div>

   
    )
  }
}

export default Header3;


