import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../resources/logowobg.png';
import ModalIniciaSesion from '../components/ModalIniciaSesion';
import ModalRegistrarse from '../components/ModalRegistrarse';
import Search from '../components/Search';
import CardNR from '../components/CardNR';
import LoginButtonG from './LoginButtonG';



class Header1 extends Component{
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <nav class="navbar navbar-inverse" fixed="top">
          <div class="container-fluid">
              <img src={logo} className="App-logo" alt="GAMECH logo" />
              <h1 className="title">GAMECH</h1>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <LoginButtonG/>
      <ModalIniciaSesion/>
        &nbsp;
        <ModalRegistrarse/>

        </li>
    </ul>
     

  </div>
</nav>
<Search/>
      <CardNR />
        </div>
      </div>
    )
  }
}

export default Header1;


