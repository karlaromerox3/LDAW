import React from 'react';
import '../App.css';
import '../styles/modals.css';
import { Modal } from 'react-bootstrap';
import { Button, FormGroup, Label, Col, Input, Row, Dropdown, Alert } from "reactstrap";

/*
  Este componente recibe:
    nombre
    cel
    correo
*/

class ModalVerDatos extends React.Component {
  constructor(props) {
    super(props);
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
        <Button color="primary" onClick={() => { this.handleModal() }}>Ver Datos</Button>
        <Modal className="modalOferta" show={this.state.show} onHide={() => this.handleModal()} centered>
          {/*<Modal.Header closeButton>
            <h6 className="modal-title">Registrar Oferta</h6>
          </Modal.Header>*/}
          <Modal.Body>
            <div class="row">
              <div class="col-12">
                <center><h3>Datos de contacto</h3></center> <br/>
                <p><strong>Nombre completo: </strong>
                <p class="bigger-text">{this.props.name}</p></p>
                <p>
                  <strong>Celular/Teléfono: </strong> <br/>
                  <p class="bigger-text">{this.props.phone}</p>
                </p>
                <p>
                  <strong>Correo: </strong> <br/>
                  <p class="bigger-text">{this.props.email}</p>
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