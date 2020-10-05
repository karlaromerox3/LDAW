import React from 'react';
import '../App.css';
import '../styles/modals.css';
import { Modal } from 'react-bootstrap';

/*
  Este componente recibe:
    nombre
    cel
    correo
*/

class ModalVerDatos extends React.Component {
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
        <button className="btn btn-outline-primary" onClick={() => { this.handleModal() }}>Ver Datos</button>
        <Modal className="modalOferta" show={this.state.show} onHide={() => this.handleModal()} centered>
          {/*<Modal.Header closeButton>
            <h6 className="modal-title">Registrar Oferta</h6>
          </Modal.Header>*/}
          <Modal.Body>
            <div class="row">
              <div class="col-12">
                <center><h3 className="titulo-modal">Datos de contacto</h3></center> <br/>
                <p><strong>Nombre completo: </strong>
                <p class="bigger-text">{this.props.nombre}</p></p>
                <p>
                  <strong>Celular/Teléfono: </strong> <br/>
                  <p class="bigger-text">{this.props.cel}</p>
                </p>
                <p>
                  <strong>Correo: </strong> <br/>
                  <p class="bigger-text">{this.props.correo}</p>
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.StrictMode>
    );
  }
}

export default ModalVerDatos;