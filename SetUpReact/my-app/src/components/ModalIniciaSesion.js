
import React, { Component } from 'react';
import {  Button,Modal, Form} from 'react-bootstrap';
import logo from './../resources/logowobg.png';
import logoGoogle from './../resources/google.png';
import LoginButtonG from './LoginButtonG';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, Redirect } from "react-router-dom";


class ModalIniciaSesion extends Component {
  constructor(props) {
    super(props);


    this.state = {
      show: false,
      isAuthenticated: false,
    token: null
    
    }

    this.authenticate = this.authenticate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  authenticate(token) {
    this.setState({
        isAuthenticated: false,
        token: token
    })
}
  
handleSubmit(event) {
  event.preventDefault();
  var pass = document.getElementById("password").value;
  var correo = document.getElementById("email").value;

  const usuario ={
    email: correo,
    password:pass
  }
  axios.post('http://localhost:8000/api/auth/login', usuario)
  .then((response) => {
      const token = response.data.token;
      //console.log(token);
      localStorage.setItem("token",token);
     // localStorage.setItem("user",response.config.data);

      this.isAuthenticated=true;
      //var prueba=this.isAuthenticated;
      localStorage.setItem("auth",this.isAuthenticated);

  })
  
  .catch((error) => {
      console.log(error);
      localStorage.setItem("auth",false);

  });

}

  login(){

    if(localStorage.getItem("auth")==true){
      return <Redirect to="/registrado" />
    }else{
      return <Redirect to="/" />
    }
   
  }
   



  handleModal() {
    this.setState({ show: !this.state.show });
  }



  render() {
    
    return (
      <React.StrictMode>

        <button className="btn btn-outline-primary" onClick={() => { this.handleModal() }}>Iniciar Sesión</button>
        <Modal className="modalIniciarSesion" show={this.state.show} onHide={() => this.handleModal()} centered>
        <div class="modalIS">

        <Modal.Header closeButton>
          <div className="center">  <Modal.Title><img allign="center" src={logo} className="App-logo" alt="GAMECH logo" /></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
        <Form onClick={this.handleSubmit} >
  <Form.Group controlId="email">
    <Form.Label>Correo:</Form.Label>
    <Form.Control type="email" placeholder="ejemplo23@ejemplo.com" />
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Label>Contraseña:</Form.Label>
    <Form.Control type="password" placeholder="" />
  </Form.Group>
  
  
  <ul>

  <Button variant="primary" type="submit" onClick={this.login}>
    Inicia Sesión
  </Button>
  </ul>
 
     
  
  
</Form>
        </Modal.Body>
        
        <Modal.Footer>
        
          
 
        </Modal.Footer>
        
       
       
        </div>
        
        </Modal>
      </React.StrictMode>
    );
  }
}

export default ModalIniciaSesion;
