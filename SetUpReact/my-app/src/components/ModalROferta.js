import React from 'react';
import '../App.css';
import '../styles/modals.css'
import { Button, Modal } from 'react-bootstrap';
import Dropdown from './Dropdown';

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
        <Modal className="modalOferta" show={this.state.show} onHide={() => this.handleModal()} centered>
         
          <Modal.Body>
          <center><h3>Registrar Oferta</h3></center> <br/>
            <form>
              {/*Aqui va el componente del dropdown*/}
              <Dropdown 
              titulo = 'Selecciona el juego a intercambiar'
               />
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