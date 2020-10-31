import React, {Component} from 'react';

//Components
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {Button, FormGroup, Label, Col, Input, Row, Dropdown} from "reactstrap";

import logo from './../resources/logowobg.png';

//API calls
import axios from "axios";
import {API_BASE_URL} from "../index";
import Swal from 'sweetalert2'

//Importing Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,far)


export default class RegistrarJuego extends Component {

    crearSelect(){
        var sel='<option value="NA" disabled selected>Selecciona una opcion...</option>';
        const num=1;
        axios.get(API_BASE_URL + "consoles").then(function(resp){
        console.log(resp.data);
        resp.data.forEach(element =>{
          sel = sel.concat('<option value=' + element.id + '>' + element.console +'</option>');
        });
        document.getElementById("selectConsole").innerHTML=sel; 
      });
    }

    crearSelect2(){
        var sel='<option value="NA" disabled selected>Selecciona una opcion...</option>';
        const num=1;
        axios.get(API_BASE_URL + "titles").then(function(resp){
        console.log(resp.data);
        resp.data.forEach(element =>{
          sel = sel.concat('<option value=' + element.id + '>' + element.gameName + ' ' + element.edition + ' ' +  element.version +'</option>');
        });
        document.getElementById("selectTitle").innerHTML=sel; 
      });
    }

    constructor(props){
        super(props)
        this.onSubmit= this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault()

        //Agarrar los valores 
        let user_id = document.getElementById("user_id").value;
        let title = document.getElementById("selectTitle").value;
        let console_id = document.getElementById("selectConsole").value;
        let condition = document.getElementById("condition").value;

        const juego = {
            user_id: user_id,
            title_id: title,
            console_id: console_id,
            condition: condition
        };

        axios.post(API_BASE_URL + "games/", juego).
        then(res => console.log(res.data)); 

        /*Swal.fire({
            position: 'top-end',
            type: 'success',
            text: 'Juego registrado de manera exitosa',
            showConfirmButton: false,
            timer: 3000
        })*/
    }

    render() {
        this.crearSelect2();
        this.crearSelect();

    return (
    <div className="container">
        <Row>
            <img src={logo} className="App-logo" alt="GAMECH logo" />
            <h3 className="text-center">REGISTRAR JUEGO</h3>
            
        </Row>

        <h5><span className="badge badge-light">Todos los campos son obligatorios.</span></h5>
        <Form onClick={this.onSubmit}>

        <Input type="text" id="user_id" value="1" hidden></Input> 
        
        <FormGroup>
            <label>Título:</label>
            <Form.Control as="select" id="selectTitle" required></Form.Control>
        </FormGroup>

        <FormGroup>
            <FontAwesomeIcon icon={['fas', 'gamepad']} color="white"/>
            &nbsp;
            <label>Consola:</label>
            <Form.Control as="select" id="selectConsole" required></Form.Control>
        </FormGroup>

        <FormGroup>
            <FontAwesomeIcon icon={['fas', 'comment']} color="white"/>
            &nbsp;
            <Label>Condiciones:</Label>
            <Input type="textarea" id="condition" required></Input>
	    </FormGroup>

        <Row className="text-center">
            <Col md="12">
                <Link to="/registrado">
                <Button color="primary" onClick="onSubmit()">Registrar</Button>
                </Link>
            </Col>
        </Row>

        <Row>
            <Col md="12">
                <Link to="/registrado">
                <Button color="primary"className="float-left"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']}/> Regresar</Button>
                </Link>
            </Col>
        </Row>

    </Form> 
</div>
    )
    }
}
