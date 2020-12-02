import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import {Navbar,Image,FormControl,Nav,NavDropdown} from "react-bootstrap";

//Components
import {
  Label,
  Input,
  FormGroup,
  InputGroupAddon,
  InputGroup,
  Form,
  
  InputGroupText,
} from "reactstrap";
import logo from "../resources/logowobg.png";
import ModalRegistrarse from "../components/ModalRegistrarse";
//import LoginButtonG from '../components/LoginButtonG';
import Card from "../components/Card";
import ModalIniciaSesion from "../components/ModalIniciaSesion";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas, far);

export default class MainViewR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <div class="content">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav>
    <Link to="/login">
    <button className="btn btn-outline-primary">
                          Iniciar Sesión
                        </button>
      </Link>
      &nbsp;
      <Link to="/register">
      <button className="btn btn-outline-primary">
                          Registrarse
                        </button>

      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div class="container-fluid">
                  <div class="row justify-content-center">
                  <Image src={logo} className="App-logo" alt="GAMECH logo" fluid />
                  
                    <h1 className="title">GAMECH</h1>
                  </div>
                 

</div>
<div className="container">
                <FormGroup>
                  <Label>Escribe el nombre de un juego...</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FontAwesomeIcon
                          icon={["fas", "search"]}
                          color="#2b2d30"
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      onChange={this.onInputChange}
                      type="text"
                      className="form-control"
                      placeholder="Animal crossing"
                      aria-label="buscarTitulo"
                      aria-describedby="buscarTitulo"
                    ></Input>
                  </InputGroup>
                </FormGroup>
              </div>
              <Card inputValue={this.state.inputValue} />
            </div>

                        

    );
  }
}
