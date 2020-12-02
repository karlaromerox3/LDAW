import React, { Component } from 'react';

//Components
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button, FormGroup, Label, Col, Input, Row, Dropdown, Alert } from "reactstrap";
import {Navbar,Image,FormControl,Nav,NavDropdown} from "react-bootstrap";

import logo from './../resources/logowobg.png';
import LogoutButtonG from '../components/LogoutButtonG';
import Logout from '../components/Logout';


//API calls
import axios from "axios";
import { API_BASE_URL } from "../index";
import Swal from 'sweetalert2'

//Importing Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, far)

// REGEX FOR VALIDATIONS
const validName = RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/);
const validPhone = RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
const validEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

function parseGames(userGames) {
  return userGames.map((game) => {
    return { label: game.gameName + " " + game.edition + " " + game.version + "/ " + game.consoleName, value: game.game_id };
  })
}



export default class RegistrarOferta extends Component {

  

  getUserGames() {
    let urlElements = window.location.href.split('/');
    console.log(urlElements);
    //Le mando el id del usuario que registró el juego
    axios.get(API_BASE_URL + 'getUserGames/' + urlElements[5])
      .then(
        res => this.setState({ userGames: parseGames(res.data) }));
  }

  constructor(props) {
    super(props)
    this.state = {
      userGames: [],
      condition: null,
      urlElements : window.location.href.split('/'),
      errors: {
        nombre: '',
        email: '',
        phone: '',
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.nombre =
          value.length < 1
            ? "El nombre es un campo requerido"
            : "" || validName.test(value)
              ? ""
              : "El campo solo acepta letras y al menos 3 palabras.";
        break;
        case 'mail':
        errors.email =
          value.length < 1
            ? "El correo es un campo requerido"
            : "" || validEmail.test(value)
              ? ""
              : "El campo no es un email.";
        break;
        case 'telephone':
        errors.phone =
          value.length < 1
            ? "El teléfono es un campo requerido"
            : "" || validPhone.test(value)
              ? ""
              : "El campo solo acepta 10 números.";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  onSubmit(e) {
    e.preventDefault()

    //Agarrar los valores 
    let userD_id = document.getElementById("userD_id").value;
    let name = document.getElementById("name").value;
    let telephone = document.getElementById("telephone").value;
    let mail = document.getElementById("mail").value;
    let gameD_id = document.getElementById("gameD_id").value;
    let gameR_id = document.getElementById("gameR_id").value;
    
    if (userD_id !== '' && name !== '' && telephone !== '' && mail !== '' && gameD_id != '' && gameR_id != '') {
      const oferta = {
        userD_id: userD_id,
        name: name,
        telephone: telephone,
        mail: mail,
        gameD_id: gameD_id,
        gameR_id: gameR_id
      };

      axios.post(API_BASE_URL + "postOffer", oferta).then(res => console.log(res.data));

      Swal.fire(
        '¡Listo!',
        'Oferta registrada de manera exitosa',
        'success'
      ).then(function () {
        window.location = "http://localhost:3000/registrado";
      });
    } else {
      Swal.fire(
        'ERROR!',
        'Verifica que los campos obligatorios estén llenos',
        'error'
      )
    }
  }

  componentDidMount() {
    this.getUserGames();
  }

  render() {
    const { errors } = this.state;
    return (
      <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav fixed="top">
                      <Logout />
    </Nav>
  </Navbar.Collapse>
</Navbar> 
<div class="container-fluid">
                  <div class="row justify-content-center">
                  <Image src={logo} className="App-logo" alt="GAMECH logo" fluid />
                  
                    <h1 className="title">Registrar Juego</h1>
                  </div>
               
      <br></br>
      <div className="container">
      &nbsp;&nbsp;&nbsp;
        <Alert color="primary">Todos los campos son obligatorios.</Alert>
        <br></br>
        <Form onSubmit={this.onSubmit} autoComplete="off">
        {console.log(window.location.pathname)}
        {/* //harcodeado pero aqui debe ir el userid y el juego que eligió */}
            <Input type="text" id="userD_id" value={this.state.urlElements[5]} hidden></Input>
            
            <Input type="text" id="gameR_id" value={this.state.urlElements[4]} hidden></Input>

            <FormGroup>
            <Label>* Seleccionar juego a intercambiar:</Label>
              <Input type="select" name="gameD_id" id="gameD_id" value={this.state.value} onChange={this.onChange}>
                <option>Selecciona una opción...</option>
                {this.state.userGames.map((userGames) => <option key={userGames.value} value={userGames.value}>{userGames.label}</option>)}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>* Nombre Completo:</Label>
              <Input type="text" name="name" id="name" onChange={this.handleChange} placeholder="María Sandoval Arrieta">
              </Input>
              {errors.nombre.length > 0 && <span className='error badge badge-danger'>{errors.nombre}</span>
                ||
                errors.nombre.length == 0 && <span className='error badge badge-danger'>{errors.nombre}</span>}
            </FormGroup>

            <FormGroup>
              <Label>* Teléfono:</Label>
              <Input type="tel" name="telephone" id="telephone" placeholder="7121123412" onChange={this.handleChange}>
              </Input>{errors.phone.length > 0 && <span className='error badge badge-danger'>{errors.phone}</span>
                ||
                errors.phone.length == 0 && <span className='error badge badge-danger'>{errors.phone}</span>}
            </FormGroup>

            <FormGroup>
              <Label>* Email:</Label>
              <Input type="email" name="mail" id="mail" onChange={this.handleChange} placeholder="hola@ejemplo.com">
              </Input>{errors.email.length > 0 && <span className='error badge badge-danger'>{errors.email}</span>
                ||
                errors.email.length == 0 && <span className='error badge badge-danger'>{errors.email}</span>}
            </FormGroup>

            
            <br></br><br></br>
            <Row className="text-center">
              <Col md="12">
                <Button color="primary" type="submit">Registrar</Button>
              </Col>
            </Row>

            <div class="fixed-bottom"  style={{margin: '15px'}}>
              <Link to='/registrado'>  
              <Button color="primary" id="regresar"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']}/>&nbsp;Regresar</Button>
              </Link>
            </div>
          </Form>
      </div>
      </div>
      </div>
    )
  }
}
