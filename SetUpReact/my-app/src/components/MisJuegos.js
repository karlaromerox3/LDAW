import React, { Component } from 'react'
import { Link } from "react-router-dom";

//COMPONENTS
import {Button, Table, Row, InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label} from 'reactstrap';
//import LogoutButtonG from '../components/LogoutButtonG';
import SimpleTooltip from '../components/SimpleTooltip';
import Swal from 'sweetalert2';
import Logout from '../components/Logout';

//STYLES
import logo from './../resources/logowobg.png';

//API CALLS
import axios from 'axios';
import { API_BASE_URL } from '../index';

//importing icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas,far)

export default class MisJuegos extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      games: [],
      titles: [],
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
    console.log(e.target.value)
  }

    state = {
        games: [],
        titles: [],
      }

    componentDidMount() {
        this.getGame();
      }

      getGame(){
        let urlElements = window.location.href.split('/');
        axios.get(API_BASE_URL + 'games/myGames/' + urlElements[4])
          .then(res => {
            const games = res.data;
            console.log(games);
            this.setState({ games });
            let empty = this.state.games.length;
          if(empty === 0){
            Swal.fire(
              'ERROR!',
              'No existen registros aún.',
              'error'
            );
          }
          })
      }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <img src={logo} className="App-logo" alt="GAMECH logo" />
            <h1 className="title">MIS JUEGOS</h1>
            <div className="App-header">
              <div fixed="top-right">
                      <Logout />
              </div>
              <br />
            </div>
          </div>
        </nav>
        <div className="container">
        <FormGroup>
          <Label>Escribe el nombre de un juego...</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText><FontAwesomeIcon icon={['fas', 'search']} color="#2b2d30" /></InputGroupText>
            </InputGroupAddon>
            <Input onChange={this.onInputChange} type="text" className="form-control" placeholder="Animal crossing" aria-label="buscarTitulo" aria-describedby="buscarTitulo"></Input>
          </InputGroup>
        </FormGroup>
        </div>
        <div className="container">
            <div style={{
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
              <br></br><br></br>
        <Table dark hover>
            <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Edición</th>
                  <th>Versión</th>
                  <th>Consola</th>
                  <th>Num.ofertas</th>
                  <th>Acción</th>
              </tr>
            </thead>
            {this.state.games.map((game) => (
            <>
            <tbody>
                <tr key={game.id}>
                  <td>{game.title.gameName}</td>
                  <td>{game.title.edition}</td>
                  <td>{game.title.version}</td>
                  <td>{game.console.name}</td>
                  <td></td>
                  <td>
                    <Row>
                        <Button color="primary">Ver ofertas</Button>
                    </Row>
                  </td>
                </tr>
            </tbody>
            </>
        ))}
        </Table>
        </div>
        <div class="fixed-bottom"  style={{margin: '15px'}}>
        <Link to='../registrado'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="primary" id="regresar"><FontAwesomeIcon icon={['fas', 'arrow-left']}/>&nbsp;Regresar</Button>
        </Link>
        </div>
        </div>
            </div>
        )
    }
}