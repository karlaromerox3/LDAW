import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../resources/logowobg.png';

export default function Header1() {
  return (
<div className="row">
<div className="col-lg-12">
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <img src={logo} className="App-logo" alt="GAMECH logo"  width="170px"/>
    <h1>GAMECH</h1>
    <ul class="nav navbar-nav navbar-right">
    <li>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registrarse">Registrarse</button>
      &ensp;
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#iniciarSesion">Iniciar sesión</button></li>
    </ul>
  </div>
</nav>
</div>
</div>
  )
}