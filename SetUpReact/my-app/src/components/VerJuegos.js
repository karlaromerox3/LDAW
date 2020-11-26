import React, { Component } from 'react'
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'

//COMPONENTS
import {Button, Table, Row, Badge} from 'reactstrap';
import LogoutButtonG from '../components/LogoutButtonG';
import SimpleTooltip from '../components/SimpleTooltip';
import Swal from 'sweetalert2';

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

export default class VerJuegos extends Component {

    state = {
        games: [],
        titles: [],
      }

    componentDidMount() {
        this.getTitle();
        this.getGame();
      }

      getGame(){
        let urlElements = window.location.href.split('/');
        axios.get(API_BASE_URL + 'games/' + urlElements[4] )
          .then(res => {
            const games = res.data;
            console.log(games);
            this.setState({ games });
            let empty = this.state.games.length;
            if(empty === 0){
              Swal.fire(
                'ERROR!',
                'No existen registros de este título.',
                'error'
              ).then(function() {
                window.location = "http://localhost:3000/registrado";
            });
            }
          })
      }

      getTitle(){
        let urlElements = window.location.href.split('/');
        axios.get(API_BASE_URL + 'titles/' + urlElements[4] )
          .then(res => {
            const titles = res.data;
            console.log(titles);
            this.setState({ titles });
          })
      }
    render() {
      if(!localStorage.getItem('token')){
        return <Redirect to='login'/>
    }
        return (
            <div>
                <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <img src={logo} className="App-logo" alt="GAMECH logo" />
            <Link   to={{
                        pathname: '../MisOfertas/1',
                      
                      }}>
                      <Button color="primary" data-toggle="modal" data-target="#misOfertas">Mis Ofertas</Button>
                      
                    </Link>
            
            <h1 className="title">GAMECH</h1>
            <div className="App-header">
            <div fixed="top-right">
                <Row>
                      <LogoutButtonG />
                </Row>
                &nbsp;&nbsp;&nbsp;
                <Row>
                    {/*<Link to={{
                            pathname: '../MisJuegos/' + id,
                            state: id
                        }}>*/}
                       <Link to={{
                            pathname: '../MisJuegos/1'
                        }}> 
                      <Button color="primary">Mis Juegos</Button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to='../RegistrarJuego/1'>
                        <Button color="primary" id="registrar">Registrar juego</Button>
                    </Link>
                  </Row>
              </div>
              <br />
            </div>
          </div>
        </nav>
        <div className="container">
        {this.state.titles.map((title) => (
            <>
            <Badge  style={{fontSize: '3rem'}}>{title.gameName} :: {title.edition} :: {title.version}</Badge>
            </>
        ))}
            <div style={{
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
              <br></br><br></br>
        <Table dark hover>
            <thead>
              <tr>
                  <th>Usuario</th>
                  <th>Consola</th>
                  <th>Condiciones</th>
                  <th>Acción</th>
              </tr>
            </thead>
            {this.state.games.map((game) => (
            <>
            <tbody>
                <tr key={game.game_id}>
                  <td>{game.uname}</td>
                  <td>{game.consoleName}</td>
                  <td>{game.condition}</td>
                  <td>
                  <Link   to={{
                        pathname: '../RegistrarOferta/'+ game.game_id + `/${localStorage.getItem("id")}`,
                        state:game.id
                      
                      }}>
                      <Button color="primary" size="sm" id="RegistrarOferta">Registrar oferta</Button>
                      <SimpleTooltip placement="top" target="RegistrarOferta">Registrar oferta</SimpleTooltip>
                    </Link>
                    
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
