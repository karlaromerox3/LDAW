import React, { Component } from 'react';
import { Dropdown, Tooltip, Button, OverlayTrigger} from 'react-bootstrap';
import './../App.css';
import { Link } from "react-router-dom";
import logo from './../resources/logowobg.png';
import Search from '../components/Search';
import CardR from '../components/CardR';

//importing icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,far)

class Header2 extends Component{
  
  render() {
    return (
      <div className="App">
        
        <nav className="navbar navbar-inverse">
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
  <div className="container-fluid">
 

  


  <img src={logo} className="App-logo" alt="GAMECH logo" />
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#misOfertas">Mis Ofertas</button>

              <h1 className="title">GAMECH</h1>
              <div className="App-header">
          <div fixed="top-right">
          <ul className="nav navbar-nav navbar-right">
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
      <li> 
        <Link to="./MisJuegos.js">
        <button type="button" className="btn btn-primary">Mis Juegos</button>
        </Link>
&nbsp;&nbsp;&nbsp;

<Link to='../RegistrarJuego.js'>
<OverlayTrigger placement="top" 
  overlay={
    <Tooltip>
      Registrar juego
    </Tooltip>
  }
>
  <Button variant="primary"><FontAwesomeIcon icon={['fas', 'gamepad']} /></Button>
</OverlayTrigger>
</Link>

</li>
      </ul>
          </div>
<br />
</div>

</div>


</nav>
<Search/>

<CardR />

  
<br />

</div>


    )
  }
}

export default Header2;


