
import React, { Component } from 'react';
import {  Button,Modal, Form} from 'react-bootstrap';
import logo from './../resources/logowobg.png';
import logoGoogle from './../resources/google.png';
import { GoogleLogin } from 'react-google-login';


class ModalIniciaSesion extends Component {
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
    const responseGoogle = (response) => {
      console.log(response);
    }
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
      




    
      <br/><br></br>
  <GoogleLogin
    clientId="684053225371-s5l0g3qrs6figvun3mfh6s9nlqir305b.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

  

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
