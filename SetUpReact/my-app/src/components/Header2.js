import React, { Component } from 'react';
import { Dropdown, Form, Button,FormControl} from 'react-bootstrap';
import './../App.css';
import logo from './../resources/logowobg.png';
import Search from '../components/Search';
import CardNR from '../components/CardNR';

class Header2 extends Component{
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <nav class="navbar navbar-inverse">
          {/*<div className="position:right">
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      Buenas tardes, nomUsuario
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    </div>*/}
  <div class="container-fluid">
 

  


  <img src={logo} className="App-logo" alt="GAMECH logo" />
  <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#misOfertas">Mis Ofertas</button>

              <h1 className="title">GAMECH</h1>
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
      <br/>
      <li> <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#misOfertas">Mis Juegos</button>
&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#nuevoTitulo">ADD</button>
</li>
      </ul>
<br />
</div>




</nav>
<Search/>

    <CardNR />

  
<br />

</div>
</div>

    )
  }
}

export default Header2;


