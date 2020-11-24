import React, { Component } from 'react';

//Components
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button, FormGroup, Label, Col, Input, Row, Dropdown, Alert } from "reactstrap";
import  { Redirect } from 'react-router-dom'

import logo from './../resources/logowobg.png';
//import LogoutButtonG from '../components/LogoutButtonG';
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
const validTextInput = RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/);

function parseTitles(titles) {
  return titles.map((title) => {
    return { label: title.gameName + " " + title.edition + " " + title.version, value: title.id };
  })
}

function parseConsoles(consoles) {
  return consoles.map((console) => {
    return { label: console.name, value: console.id };
  })
}

export default class RegistrarJuego extends Component {

  getConsoles() {
    axios.get(API_BASE_URL + 'consoles')
      .then(res => this.setState({ consoles: parseConsoles(res.data) }));
  }

  getTitles() {
    axios.get(API_BASE_URL + 'titles')
      .then(res => this.setState({ titles: parseTitles(res.data) }));
  }

  constructor(props) {
    super(props)
    this.state = {
      consoles: [],
      titles: [],
      condition: null,
      errors: {
        condition: '',
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
      case 'condition':
        errors.condition =
          value.length < 1
            ? "La condición del juego es un campo requerido"
            : "" || validTextInput.test(value)
              ? ""
              : "El campo solo acepta letras.";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  onSubmit(e) {
    e.preventDefault()

    //Agarrar los valores 
    let user_id = document.getElementById("user_id").value;
    let title_id = document.getElementById("title").value;
    let console_id = document.getElementById("console").value;
    let condition = document.getElementById("condition").value;
    
    if (title_id !== '' && condition !== '' && console_id !== '') {
      const juego = {
        user_id: user_id,
        title_id: title_id,
        console_id: console_id,
        condition: condition
      };

      axios.post(API_BASE_URL + "games/", juego).then(res => console.log(res.data));

      Swal.fire(
        '¡Listo!',
        'Juego registrado de manera exitosa',
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
    this.getTitles();
    this.getConsoles();
  }

  render() {
    if(!localStorage.getItem('token')){
      return <Redirect to='login'/>
  }
    const { errors } = this.state;
    return (
      <>

      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <img src={logo} className="App-logo" alt="GAMECH logo" />
            <h1 className="title">REGISTRAR JUEGO</h1>
            <div className="App-header">
              <div fixed="top-right">
                      <Logout />
              </div>
              <br />
            </div>
          </div>
        </nav> 
      <br></br><br></br>
      <div className="container">
      &nbsp;&nbsp;&nbsp;
        <Alert color="primary">Todos los campos son obligatorios.</Alert>
        <br></br>
        <Form onSubmit={this.onSubmit} autoComplete="off">
            <Input type="text" id="user_id" value="1" hidden></Input>

            <FormGroup>
              <Label>Título:</Label>
              <Input type="select" name="title" id="title" value={this.state.value} onChange={this.onChange}>
                <option defaultValue="0">Selecciona una opción...</option>
                {this.state.titles.map((title) => <option key={title.value} value={title.value}>{title.label}</option>)}
              </Input>
            </FormGroup>

            <FormGroup>
            <Label>Consola:</Label>
              <Input type="select" name="console" id="console" value={this.state.value} onChange={this.onChange}>
                <option>Selecciona una opción...</option>
                {this.state.consoles.map((console) => <option key={console.value} value={console.value}>{console.label}</option>)}
              </Input>
            </FormGroup>

            <FormGroup>
              <FontAwesomeIcon icon={['fas', 'comment']} color="white" />
            &nbsp;
            <Label>Condiciones:</Label>
              <Input type="textarea" id="condition" name="condition" onChange={this.handleChange} ></Input>
              {errors.condition.length > 0 && <span className='error badge badge-danger'>{errors.condition}</span>
                ||
                errors.condition.length == 0 && <span className='error badge badge-danger'>{errors.condition}</span>}
            </FormGroup>
            <br></br><br></br>
            <Row className="text-center">
              <Col md="12">
                <Button color="primary" type="submit">Registrar</Button>
              </Col>
            </Row>

            <div class="fixed-bottom"  style={{margin: '15px'}}>
              <Link to='/registrado'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button color="primary" id="regresar"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']}/>&nbsp;Regresar</Button>
              </Link>
            </div>
          </Form>
      </div>
      </>
    )
  }
}
