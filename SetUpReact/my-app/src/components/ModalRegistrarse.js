
import React from 'react';
import {  Button,Modal, Form} from 'react-bootstrap';
import logo from './../resources/logowobg.png';
import logoGoogle from './../resources/google.png';
import axios from 'axios';
import Swal from 'sweetalert2';

import './../App.css';

class ModalRegistrarse extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      show: false,
     
    }

  }


  handleModal() {
    this.setState({ show: !this.state.show });
  }

  onSubmit(e){

    e.preventDefault()
  //agarrrar los valores con el id del forms
    var usuario = document.getElementById("usuario").value;
    var correo = document.getElementById("correo").value;
    var pass = document.getElementById("pass").value;
    var confiPass = document.getElementById("confPasswd").value;
 

    //var iguales = pass.localeCompare(confiPass);

    
    //if(iguales==0){
       const cuenta = {
        name: usuario,
        email:correo,
        password: pass,
      };
      axios.post('http://localhost:8000/api/account/register', cuenta)
        .then(res => {console.log(res)});
        
       //   }
       Swal.fire(
        '¡Listo!',
        'Datos guardados',
        'success'
        ).then(function() {
            window.location = "http://localhost:3000/admin/ViewDonors";
        });
    }
  

  

  render() {
    return (
      <React.StrictMode>
        <button className="btn btn-outline-primary" onClick={() => { this.handleModal() }}>Registrarse</button>
        <Modal className="modalIniciarSesion" show={this.state.show} onHide={() => this.handleModal()} centered>
        <div class="modalIS">

        <Modal.Header closeButton>
           <Modal.Title ><img  src={logo} className="App-logo" alt="GAMECH logo" /></Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="usuario">
    <Form.Label>Usuario:</Form.Label>
    <Form.Control type="text" placeholder="ejemplo23" />
  </Form.Group>
  
  <Form.Group controlId="correo">
    <Form.Label>Correo:</Form.Label>
    <Form.Control type="email" placeholder="ejemplo23@ejemplo.com" />
  </Form.Group>

  <Form.Group controlId="pass">
    <Form.Label>Contraseña:</Form.Label>
    <Form.Control type="password" placeholder="" />
  </Form.Group>
  <Form.Group controlId="confPasswd">
    <Form.Label>Confirmar Contraseña:</Form.Label>
    <Form.Control type="password" placeholder="" />
  </Form.Group>
  <ul>

  <Button variant="primary" type="submit">
    Registrarse
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

export default ModalRegistrarse;
