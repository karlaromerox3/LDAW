import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {  Button } from "reactstrap";

//Components
import {Label, Input, FormGroup, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap';
import logo from '../resources/logowobg.png';
import ModalRegistrarse from '../components/ModalRegistrarse';
//import LoginButtonG from '../components/LoginButtonG';
import Card from '../components/Card';
import ModalIniciaSesion from '../components/ModalIniciaSesion';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, far)

export default class MainViewR extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
    console.log(e.target.value)
  }

  render() {
   
    return (
      <div class="content">
      <div class="container">
          <div class="row">
              <div class="col-12" >        <nav class="navbar navbar-inverse" fixed="top">
          <div class="container-fluid">
          <div class="row justify-content-center">

<img src={logo} className="App-logo" alt="GAMECH logo" />
</div>            
<h1 className="title">GAMECH</h1>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="/login">
                <button className="btn btn-outline-primary" >Iniciar Sesión</button>
                </Link>
                &nbsp;
                <Link to="/register">
                <button className="btn btn-outline-primary" >Registrarse</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <FormGroup>
          <Label>Escribe el nombre de un juego...</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText><FontAwesomeIcon icon={['fas', 'search']} color="#2b2d30" /></InputGroupText>
            </InputGroupAddon>
            <Input onChange={this.onInputChange} type="text" className="form-control" placeholder="Animal crossing" aria-label="buscarTitulo" aria-describedby="buscarTitulo"></Input>
          </InputGroup>
        </FormGroup>

        <Card inputValue={this.state.inputValue}
        />

      </div>
      </div>
      </div>
      </div>
      

    )
  }
}


