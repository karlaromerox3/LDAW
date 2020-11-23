import React, { Component } from 'react'
import { Form, Button, Container, Col,Row } from 'react-bootstrap'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import logo from '../resources/logowobg.png';

export default class Login extends Component {
constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
onChange = (e) => this.setState({ [e.target.name]: e.target.value });
handleSubmit(event) {
    console.log(this.state.email)
    console.log(this.state.password)
    event.preventDefault();
    axios.post('http://localhost:8000/api/auth/login', {
      email: this.state.email,
      password: this.state.password,
  }).then(function (res){
      console.log(res)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.config.data);
      localStorage.setItem('auth', true);
      window.location ="http://localhost:3000/registrado";
  }).catch(function (err){
      console.log(err)
      localStorage.setItem('auth', false);
      Swal.fire(
        'ERROR',
        'Usuario y/o contraseña incorrecto',
        'error'
        )
  })
 
  event.preventDefault();
}

render() {
  if(localStorage.getItem('token')){
    return <Redirect to='/registrado'/>
}
  return (
    <div class="container-fluid" allign="center">
            <img src={logo} className="App-logo" alt="GAMECH logo" />
            <h1 className="title">GAMECH</h1>
    <Container style={{ marginTop: '100px' }}>
      <Form>
        <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>. <Form.Label>Correo Electronico:</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>           
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
        </Form.Group>
        
        <Container>
  <Row>
    <Col><Link to="/">
                <Button >Regresar</Button>
                </Link> </Col>
        <Col>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
        Iniciar Sesión
        </Button>
        </Col>
  </Row>
</Container>
         

        
         
      
        
    
      
        <br/>
       
      </Form>
    </Container>
    </div>
   )
 }
}
/*handleSubmit(event) {
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
   this.setState.isAuthenticated=true;
   console.log(token);
})
  
  .catch((error) => {
      console.log(error);
  });
}*/

 