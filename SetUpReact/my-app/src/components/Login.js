import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

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
  }).catch(function (err){
      console.log(err)
      localStorage.setItem('auth', false);

  })
 
  event.preventDefault();
}

render() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Form>
        <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>. <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>           
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
        </Form.Group>
        
       <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
       <Button variant="primary" type="submit" onClick={this.handleSubmit}>
        Submit
        </Button>
      </Form>
    </Container>
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

 