import React from 'react';
import '../App.css';
import '../styles/modals.css';
import { Button, Modal } from 'react-bootstrap';

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
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }


  render() {
    return (
      <React.StrictMode>
        <button className="btn btn-outline-primary" onClick={() => { this.handleModal() }}>Ver Más</button>
        <Modal size="lg" className="modalOferta" show={this.state.show} onHide={() => this.handleModal()} centered>
          {/*<Modal.Header closeButton>
            <h6 className="modal-title">Registrar Oferta</h6>
          </Modal.Header>*/}
          <Modal.Body>
            <div class="row">
              <div class="col-6 border-right">
                <center><h2><span class="badge texto">Juego que quiero</span></h2>
                <strong>
                  <h2>
                   {this.props.tituloQ}
                  </h2>
                </strong>
                </center>
                <p>
                  <strong>Dueño: </strong>
                  {this.props.dueñoQ}
                </p>
                <p>
                  <strong>Edición: </strong>
                  {this.props.edicionQ}
                </p>
                <p>
                  <strong>Versión: </strong>
                  {this.props.versionQ}
                </p>
                <p>
                  <strong>Consola: </strong>
                  {this.props.consolaQ}
                </p>
                <p>
                  <strong>Condiciones: </strong> <br/>
                  {this.props.condicionesQ}
                </p>
              </div>
              <div class="col-6">
                <center><h2><span class="badge texto">Juego que ofrezco</span></h2>
                <strong>
                  <h2>
                   {this.props.tituloO}
                  </h2>
                </strong>
                </center>
                <p>
                  <strong>Dueño: </strong>
                  {this.props.dueñoO}
                </p>
                <p>
                  <strong>Edición: </strong>
                  {this.props.edicionO}
                </p>
                <p>
                  <strong>Versión: </strong>
                  {this.props.versionO}
                </p>
                <p>
                  <strong>Consola: </strong>
                  {this.props.consolaO}
                </p>
                <p>
                  <strong>Condiciones: </strong> <br/>
                  {this.props.condicionesO}
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.StrictMode>
    );
  }
}

export default ModalMisOfertas;