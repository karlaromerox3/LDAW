import React, { Component } from 'react';
import { Dropdown, Form, Button,FormControl} from 'react-bootstrap';
import './../App.css';
import logo from './../resources/logowobg.png';

class Header2 extends Component{
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
  <ul class="nav navbar-nav navbar-left">
      <li>
      <img src={logo} className="App-logo" alt="GAMECH logo" />
      &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#misOfertas">Mis Ofertas</button>
        <div>
        <br />
        
        </div>
        </li>
      
    </ul>
    

    <ul class="nav navbar-nav navbar-center">
      <li>    <h1 className="title">GAMECH</h1>
</li>
<br />

<li>
    <div >
        <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button >Search</Button>
    </Form>
    </div>
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
<br />

<li> <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#misOfertas">Mis Juegos</button>
&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#nuevoTitulo">ADD</button>
</li>

    </ul>
  </div>
</nav>
        </div>
      </div>
    )
  }
}

export default Header2;


