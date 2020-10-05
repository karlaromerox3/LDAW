import React, { Component } from 'react';
import { Dropdown, Form, Button,FormControl} from 'react-bootstrap';
import './../App.css';
import logo from './../resources/logowobg.png';

class Header3 extends Component{
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
  <ul class="nav navbar-nav navbar-left">
      <li>
      <img src={logo} className="App-logo" alt="GAMECH logo" />
      
        <div>
        <br />
        
        </div>
        </li>
      
    </ul>
    

    <ul class="nav navbar-nav navbar-center">
      <li>    <h1 className="title">SMASH BROS</h1></li>
      <li>        <div class="toptext"> <p >Edición: Ultimate </p>&nbsp;&nbsp;&nbsp; <p align="left">Versión: 4.5</p></div>
</li>

    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li>
       
        <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic">
    Buenas tardes, nomUsuario
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</li>
    </ul>
  </div>
</nav>





        </div>
      </div>

   
    )
  }
}

export default Header3;


