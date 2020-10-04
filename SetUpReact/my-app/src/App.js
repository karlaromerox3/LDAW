import React, { Component } from 'react';
import './App.css';
import logo from './resources/logowobg.png';

class App extends Component{
  render() {
    return (
      <React.StrictMode>
        <div className="App-header">
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <img src={logo} className="App-logo" alt="GAMECH logo" />
              <h1 className="title">GAMECH</h1>
              <ul class="nav navbar-nav navbar-right">
                <li>
                  &nbsp;
                  <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#iniciarSesion">Iniciar sesión</button></li>
              </ul>
            </div>
          </nav>
        </div>
      </React.StrictMode>
    )
  }
}

export default App;


