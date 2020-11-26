import React, { Component } from 'react'
import { Link } from "react-router-dom";

//COMPONENTS
import {Button, Table, Row, Badge} from 'reactstrap';
import LogoutButtonG from '../components/LogoutButtonG';
import SimpleTooltip from '../components/SimpleTooltip';
import Swal from 'sweetalert2';
import ModalVerDatos from "../components/ModalVerDatos";


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

export default class VerOfertas extends Component {
    state = {
      
        offers: [],
        urlElements: window.location.href.split('/'),
        
      }

    componentDidMount() {
        this.getOffers();
      }

      

      getOffers(){
        let urlElements = window.location.href.split('/');
        axios.get(API_BASE_URL + 'getOfferForGame/' + urlElements[4] )
          .then(res => {
            const offers = res.data;
            console.log(offers);
            this.setState({ offers });
            let empty = this.state.offers.length;
          if(empty === 0){
            Swal.fire(
              'ERROR!',
              'No existen registros aún.',
              'error'
            ).then(function() {
              window.location = "http://localhost:3000/registrado";
          });
          }
          
          })
      }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <img src={logo} className="App-logo" alt="GAMECH logo" />
            
            <h1 className="title">Ver Ofertas</h1>
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
                            pathname: '../MisJuegos/'+this.state.urlElements[4]
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
        
            <div style={{
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
              <br></br><br></br>
        <Table dark hover>
            <thead>
              <tr>
                  <th>Juego que ofertan</th>
                  <th>Dueño</th>
                  <th>Acción</th>
              </tr>
            </thead>
            {this.state.offers.map((offer) => (
            <>
            <tbody>
                <tr key={offer.id}>
                  <td>{offer.gameName}</td>
                  <td>{offer.completeName}</td>
                 
                  <td>
                  <ModalVerDatos name = {offer.completeName} phone= {offer.telephone} email= {offer.mail}/>
                    
                    
                  </td>
                </tr>
            </tbody>
            </>
        ))}
        </Table>
        </div>
        <div class="fixed-bottom"  style={{margin: '15px'}}>
        <Link to='../../registrado'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="primary" id="regresar"><FontAwesomeIcon icon={['fas', 'arrow-left']}/>&nbsp;Regresar</Button>
        </Link>
        </div>
        </div>
            </div>
        )
    }
}
