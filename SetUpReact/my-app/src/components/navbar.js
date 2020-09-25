import React from 'react';
import logo from '../resources/logowobg.png';

function navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={logo} className="App-logo" alt="GAMECH logo" />
        <h1>GAMECH</h1>
        <form className="inline">
        <button className="btn btn-outline-primary" >Registrarse</button>
        <p> </p>
        <button className="btn btn-outline-primary">Iniciar sesión</button>
        </form>
      <h2>search</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      </li>
      <li className="nav-item">
      </li>
      <li className="nav-item">
      </li>
      <li className="nav-item dropdown">
          Dropdown link
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        </div>
      </li>
    </ul>
  </div>
</nav> 
    )
}
export default navbar;
