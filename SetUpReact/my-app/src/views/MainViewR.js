import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import axios from 'axios';

//STYLES
import './../App.css';
import logo from './../resources/logowobg.png';

//COMPONENTS
import {Button, FormGroup, InputGroup, InputGroupText, Label, Input, InputGroupAddon, Row, Col} from 'reactstrap';
import Card from '../components/Card';
import { useGoogleAuth } from "../googleAuth";
//import LogoutButtonG from '../components/LogoutButtonG';
import SimpleTooltip from '../components/SimpleTooltip';
import Logout from '../components/Logout';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, far)
var respuesta = "";

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

 
  ax(){
   const id=localStorage.getItem("email");
    axios.get("http://localhost:8000/api/account/user/"+ id)
    .then(function (resp){
      console.log(resp);
      localStorage.setItem("nombre", resp.data[0].name);
      localStorage.setItem("id", resp.data[0].id);

    } );
  
    
  }

  
  render() {
    if(!localStorage.getItem('token')){
      return <Redirect to='login'/>
  }

  /*window.onload = function(){
    axios.post("http://localhost:8000/api/auth/me")
    .then(function (resp){
      console.log(resp);
      localStorage.setItem("name",resp.config.data);
    } );
  }*/
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid" >
          
            <img src={logo} className="App-logo" alt="GAMECH logo" />
            <Button color="primary" data-toggle="modal" data-target="#misOfertas">Mis Ofertas</Button>
            <h1 className="title">GAMECH</h1><br/>

            <div className="App-header">
              <div fixed="top-right">
              <div id="saludo"></div>

                <Row>
                  

                      <Logout/>
                </Row>
               
                &nbsp;&nbsp;&nbsp;
                <Row>
                    {/*<Link to={{
                            pathname: '../MisJuegos/' + id,
                            state: id
                        }}>*/}
                       <Link to={{
                            pathname: '../MisJuegos/1'
                        }}> 
                      <Button color="primary">Mis Juegos</Button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to='../RegistrarJuego/1'>
                        <Button color="primary" id="registrar">Registrar juego</Button>
                    </Link>
                  </Row>
              </div>
              <br />
            </div>
          </div>
        </nav>
       
        <div className="container">

        <FormGroup>
          <Label>Escribe el nombre de un juego...</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText><FontAwesomeIcon icon={['fas', 'search']} color="#2b2d30" /></InputGroupText>
            </InputGroupAddon>
            <Input onChange={this.onInputChange} type="text" className="form-control" placeholder="Animal crossing" aria-label="buscarTitulo" aria-describedby="buscarTitulo"></Input>
          </InputGroup>
        </FormGroup>
        </div>
        <Card inputValue={this.state.inputValue}
        />
          

         
      </div>
      
  


    )
  }
}
 


