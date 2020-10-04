import React from 'react';
import '../App.css';
import '../styles/modals.css'
import { Button, Modal } from 'react-bootstrap';

class ModalOferta extends React.Component {
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
        <button className="btn btn-outline-primary" onClick={() => { this.handleModal() }}>Registrar Oferta</button>
        <Modal className="modalOferta" show={this.state.show} onHide={() => this.handleModal()} >
          <Modal.Header closeButton>
            <h6 className="modal-title">Registrar Oferta</h6>
          </Modal.Header>
          <Modal.Body>
            <form>
              {/*Aqui va el componente del dropdown*/}
              <div class="form-group">
                <label class="modal-text" for="nombreCompleto">Nombre Completo</label>
                <input type="text" class="form-control" id="nombreCompleto" placeholder="María Sandoval Arrieta" />
              </div>

              <div class="form-group">
                <label class="modal-text" for="telefono">Teléfono</label>
                <input type="text" class="form-control" id="telefono" placeholder="123-234-4567" />
              </div>
              
              <center><button type="submit" class="btn btn-outline-primary">Registrar</button></center>
            </form>
          </Modal.Body>
        </Modal>
      </React.StrictMode>
    );
  }
}

export default ModalOferta;