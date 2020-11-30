import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import {Navbar,FormControl,Nav,NavDropdown} from "react-bootstrap";

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
  <Navbar.Brand href="#home">GAMECH</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Link to="/login">
      <Nav.Link >Iniciar Sesión</Nav.Link>
      </Link>
      <Link to="/register">
      <Nav.Link eventKey={2} >
        Registrarse
      </Nav.Link>
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div class="container-fluid">
                  <div class="row justify-content-center">
                    <img src={logo} className="App-logo" alt="GAMECH logo" />
                  </div>
                  <div class="container">
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
