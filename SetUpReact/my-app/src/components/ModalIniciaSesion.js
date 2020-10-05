
import React, { Component } from 'react';
import {  Button,Modal, Form} from 'react-bootstrap';
import logo from './../resources/logowobg.png';
import './../App.css';
import logoGoogle from './../resources/google.png';

class ModalIniciaSesion extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
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
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Correo:</Form.Label>
    <Form.Control type="correo" placeholder="ejemplo23@ejemplo.com" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña:</Form.Label>
    <Form.Control type="contraseña" placeholder="" />
  </Form.Group>
  
  <ul>

  <Button variant="primary" type="submit">
    Registrarse
  </Button>
  </ul>
  <ul>
      <p>ó</p>
      </ul>
      <ul>
      <img  src={logoGoogle} className="Google-logo" alt="" />&nbsp;
<Button variant="primary" type="submit">
    Registrarse con Google
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
