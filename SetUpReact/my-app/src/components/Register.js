import React, { Component } from 'react'
import axios from 'axios';
import logo from '../resources/logowobg.png';
import { Form, Button,  Col,Row } from 'react-bootstrap'
import { Link, Redirect } from "react-router-dom";
import Swal from 'sweetalert2';

export default class Register extends Component {
constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value });
handleSubmit(event) {
   
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.password)
    event.preventDefault();
    axios.post('http://localhost:8000/api/account/register', {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
    }).then(function (res){
        console.log(res)
        localStorage.setItem('token', res.data.access);
        localStorage.setItem('user', res.config.data);
        Swal.fire("¡Listo!", "Su registro ha sido guardo de manera exitosa, porfavor inicie sesion", "success").then(function () {
            window.location = "http://localhost:3000/";
          });

    }).catch(function (err){
        console.log(err)
        Swal.fire(
            'ERROR',
            'Datos incompletos',
            'error'
            )
    })
    event.preventDefault();
        
        
}

      
    

render() {
    return (
        <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-12" >
                  <br/><br/>
                <div class="row justify-content-center">
    
                <img src={logo} className="App-logo" alt="GAMECH logo" />
                </div>
                <br/>
                <h1 className="title">GAMECH</h1>
          <Form>
          <div class="row justify-content-center">
                        <div class="col-4" >
<Form.Group controlId="formBasicFirstName" style={{ width: '300px' }}>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" name="name" value={this.state.name} onChange={this.onChange}/>
            </Form.Group>
            </div>
            </div>
            <div class="row justify-content-center">
                        <div class="col-4" >
<Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
              <Form.Label>Corre:</Form.Label>
              <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
            </Form.Group>
            </div>
            </div>
            <div class="row justify-content-center">
                        <div class="col-4" >
<Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
            </Form.Group>
            </div>
            </div>
            <div class="row justify-content-center">

<div class="col-4" align="center">

<Row>
<Col><Link to="/">
        <Button >Regresar</Button>
        </Link> </Col>
<Col>
<Button variant="primary" type="submit" onClick={this.handleSubmit}>
Registrar
            </Button>
            </Col>
  </Row>
  </div>
  </div>
            
</Form>
</div>
</div>
</div>
</div>
      )
   }
}