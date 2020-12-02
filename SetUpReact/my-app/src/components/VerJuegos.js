import React, { Component } from 'react'
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'

//COMPONENTS
import {Button, Table, Row, Badge} from 'reactstrap';
import LogoutButtonG from '../components/LogoutButtonG';
import SimpleTooltip from '../components/SimpleTooltip';
import Swal from 'sweetalert2';
import {Navbar,Image,FormControl,Nav,NavDropdown} from "react-bootstrap";
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
          <div class="container-fluid">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">

<Nav fixed="top">
                  <Logout />
</Nav>
&nbsp;
&nbsp;&nbsp;&nbsp;
            <Row>
                {/*<Link to={{
                        pathname: '../MisJuegos/' + id,
                        state: id
                    }}>*/}
                    <Link   to={{
                        pathname: '../MisOfertas/1',
                      
                      }}>
                      <Button color="primary" data-toggle="modal" data-target="#misOfertas">Mis Ofertas</Button>
                      
                    </Link>
            
                &nbsp;&nbsp;&nbsp;
                
              </Row>
          <br />
      

</Navbar.Collapse>
</Navbar> 
<div class="container-fluid">
                  <div class="row justify-content-center">
                  <Image src={logo} className="App-logo" alt="GAMECH logo" fluid />
                  
                    <h1 className="title">Juegos</h1>
            {/*       {this.state.titles.map((title) => (
           // <div class="container">
            <Badge  style={{fontSize: '3rem'}}>{title.gameName} :: {title.edition} :: {title.version}</Badge>
            </div>

            ))}*/}
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
                  <th>Usuario</th>
                  <th>Consola</th>
                  <th>Condiciones</th>
                  <th>Acción</th>
              </tr>
            </thead>
            {this.state.games.map((game) => (
            <>
            <tbody>
                <tr key={game.id}>
                  <td>{game.user.name}</td>
                  <td>{game.console.nombre}</td>
                  <td>{game.condition}</td>
                  <td>
                  <Link   to={{
                        pathname: '../RegistrarOferta/'+ game.id + `/${localStorage.getItem("id")}`,
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
</div>
        )
    }
}
