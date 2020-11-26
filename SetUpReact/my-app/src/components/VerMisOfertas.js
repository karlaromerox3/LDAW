import React, { Component } from 'react'
import { Link } from "react-router-dom";

//COMPONENTS
import {Button, Table, Row, Badge} from 'reactstrap';
import LogoutButtonG from '../components/LogoutButtonG';
import SimpleTooltip from '../components/SimpleTooltip';
import Swal from 'sweetalert2';

import ModalMisOfertas from "../components/ModalMisOfertas";

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

export default class VerMisOfertas extends Component {
    state = {
      
        offers: [],
        urlElements: window.location.href.split('/'),
        
      }

    componentDidMount() {
        this.getOffers();
      }

      getOffers(){
        let urlElements = window.location.href.split('/');
        axios.get(API_BASE_URL + 'getOffers/' + urlElements[4] )
          .then(res => {
            const offers = res.data;
            console.log(offers);
            this.setState({ offers });
            let empty = this.state.offers.length;
            if(empty === 0){
              Swal.fire(
                'ERROR!',
                'No tienes ninguna oferta registrada por el momento.',
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
            
            <h1 className="title">Mis Ofertas</h1>
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
                  <th>Juego que quieres</th>
                  <th>Juego que ofertas</th>
                  <th>Estatus</th>
                  <th>Acción</th>
              </tr>
            </thead>
            {this.state.offers.map((offer) => (
            <>
            <tbody>
                <tr key={offer.id}>
                  <td>{offer.gameR_id}</td>
                  <td>{offer.gameD_id}</td>
                  <td><span className='error badge badge-warning'><h6 style={{color: 'black'}}>{offer.status}</h6></span></td>
                  <td>
                      <ModalMisOfertas offerId = {offer.id} gameR_id= {offer.gameR_id} gameD_id= {offer.gameD_id}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to={{
                        pathname: '../ModificarOferta/' + offer.id + '/1',
                        state: offer.id
                      }}>
                          <Button color="primary" id="regresar"><FontAwesomeIcon icon={['fas', 'cog']}/>&nbsp;</Button><SimpleTooltip placement="top" target="modificar">Editar Oferta</SimpleTooltip>
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
            
            <Button color="primary" id="modificar"><FontAwesomeIcon icon={['fas', 'arrow-left']}/>&nbsp;Regresar</Button>
        </Link>
        </div>
        </div>
            </div>
        )
    }
}
