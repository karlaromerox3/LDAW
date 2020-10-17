
import React from 'react';
import {  Button,Modal, Form} from 'react-bootstrap';
import logo from './../resources/logowobg.png';
import logoGoogle from './../resources/google.png';

import './../App.css';

class ModalRegistrarse extends React.Component {
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
        <button className="btn btn-outline-primary" onClick={() => { this.handleModal() }}>Registrarse</button>
        <Modal className="modalIniciarSesion" show={this.state.show} onHide={() => this.handleModal()} centered>
        <div class="modalIS">

        <Modal.Header closeButton>
           <Modal.Title ><img  src={logo} className="App-logo" alt="GAMECH logo" /></Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formBasicEmail">
    <Form.Label>Usuario:</Form.Label>
    <Form.Control type="usuarioRegistro" placeholder="ejemplo23" />
  </Form.Group>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Correo:</Form.Label>
    <Form.Control type="correoRegistro" placeholder="ejemplo23@ejemplo.com" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña:</Form.Label>
    <Form.Control type="contraseñaRegistro" placeholder="" />
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

export default ModalRegistrarse;
