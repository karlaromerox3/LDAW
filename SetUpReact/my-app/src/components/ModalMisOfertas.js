import React from 'react';
import '../App.css';
import '../styles/modals.css';
import { Button, Modal } from 'react-bootstrap';

//API CALLS
import axios from 'axios';
import { API_BASE_URL } from '../index';
import Swal from 'sweetalert2';

/*
  Este componente recibe:
    titulo
    dueño
    edicion
    version
    consola
    condiciones
  
  Con sufijo Q para el juego que quiero
             O para el juego que ofrezco
*/

class ModalMisOfertas extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      show: false,      
      gameR_id: this.props.gameR_id,
      gameD_id: this.props.gameD_id,
      gameR: [],
      gameD: [],
      urlElements: window.location.href.split('/'),
    }
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount() {
    this.getRGame();
    this.getDGame();
  }

  getRGame(){
    let urlElements = window.location.href.split('/');
    axios.get(API_BASE_URL + 'getSpecificGame/' + this.props.gameR_id)
      .then(res => {
        const gameR = res.data;
        console.log(gameR);
        this.setState({ gameR });
        let empty = this.state.gameR.length;
      if(empty === 0){
        Swal.fire(
          'ERROR!',
          'No existen registros aún.',
          'error'
        );
      }
      })
  }

  getDGame(){
    let urlElements = window.location.href.split('/');
    axios.get(API_BASE_URL + 'getSpecificGame/' + this.props.gameD_id)
      .then(res => {
        const gameD = res.data;
        console.log(gameD);
        this.setState({ gameD });
        let empty = this.state.gameD.length;
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
    console.log(this.props);
    return (
      <React.StrictMode>
        <Button color='primary' onClick={() => { this.handleModal() }}>Ver Más</Button>
        <Modal size="lg" className="modalOferta" show={this.state.show} onHide={() => this.handleModal()} centered>
          {/*<Modal.Header closeButton>
            <h6 className="modal-title">Registrar Oferta</h6>
          </Modal.Header>*/}
          <Modal.Body>
            <div class="row">
              <div class="col-6 border-right">
                <center><h4><span class="badge texto">Juego que quiero</span></h4></center>
                {this.state.gameR.map((gameR) => (<>
                   <strong><h4>{gameR.title.gameName}</h4></strong>
                   <p>
                  <strong>Edición: </strong>
                  {gameR.title.edition}
                </p>
                <p>
                  <strong>Versión: </strong>
                  {gameR.title.version}
                </p>
                <p>
                  <strong>Consola: </strong>
                  {gameR.console.name}
                </p>
                <p>
                  <strong>Condiciones: </strong> <br/>
                  {gameR.condition}
                </p>
                  </>
                  ))} 
              </div>
              <div class="col-6">
                <center><h4><span class="badge texto">Juego que ofrezco</span></h4></center>
                {this.state.gameD.map((gameD) => (<>
                   <strong><h4>{gameD.title.gameName}</h4></strong>
                   <p>
                  <strong>Edición: </strong>
                  {gameD.title.edition}
                </p>
                <p>
                  <strong>Versión: </strong>
                  {gameD.title.version}
                </p>
                <p>
                  <strong>Consola: </strong>
                  {gameD.console.name}
                </p>
                <p>
                  <strong>Condiciones: </strong> <br/>
                  {gameD.condition}
                </p>
                  </>
                  ))}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.StrictMode>
    );
  }
}

export default ModalMisOfertas;