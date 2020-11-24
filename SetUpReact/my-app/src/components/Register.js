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
   
   
    event.preventDefault();
    if(this.state.email!=='' && this.state.password!=='' && this.state.name!==''){

    
    axios.post('http://localhost:8000/api/account/register', {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
    }).then(function (res){
        console.log(res)
        //localStorage.setItem('token', res.data.access);
        //localStorage.setItem('user', res.config.data);
        Swal.fire("¡Listo!", "Su registro ha sido guardo de manera exitosa, porfavor inicie sesion", "success").then(function () {
            window.location = "http://localhost:3000/login";
          });

    }).catch(function (err){
        console.log(err)
        Swal.fire(
            'ERROR',
            'Error al registrar, esta seguro que no tiene una cuenta con nosotros?',
            'error'
            )
        
    })
}else{
    Swal.fire(
        'ERROR',
        'Verifique que todos los campos esten completos',
        'error'
        )
}
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
              <Form.Control type="text" placeholder="Maria Sandoval" name="name" value={this.state.name} onChange={this.onChange}/>
            </Form.Group>
            </div>
            </div>
            <div class="row justify-content-center">
                        <div class="col-4" >
<Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
              <Form.Label>Correo:</Form.Label>
              <Form.Control type="text" placeholder="mariaSandoval@gmail.com" name="email" value={this.state.email} onChange={this.onChange}/>
            </Form.Group>
            </div>
            </div>
            <div class="row justify-content-center">
                        <div class="col-4" >
<Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control type="password" placeholder="" name="password" value={this.state.password} onChange={this.onChange}/>
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