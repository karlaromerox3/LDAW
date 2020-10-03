import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";


class DetalleJuego extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Button variant="primary" onClick={this.openModal}>
            Launch demo modal
          </Button>
        </div>
        
        <Modal size="lg" show={this.state.isOpen} onHide={this.closeModal}>
        <div className="modal-content">
            <Modal.Body>
          
          <div className="row">
            <div className="col-12">
            <h3>Animal Crossing</h3>
            </div>
          </div>
            <div className="row">
              <div className="col-4">
                  <img src="https://cdn2.downdetector.com/static/uploads/logo/How-to-play-Fall-Guys-beta-Ultimate-Knockout-joins-PS-Plus-very-soon_dA5IBWW.jpg" width="300" class="img-fluid" alt="Imagen de Ingreso" id="fotoBenef" onerror="this.onerror=null; this.src='avatar.jpg';"></img>
                  {/*<img src="archivosBeneficiarias/<?php echo obtenerImagen($idBeneficiaria.'_imagenIngreso_')?>" width="250" class="img-fluid" alt="Imagen de Ingreso" id="fotoBenef" onerror="this.onerror=null; this.src='avatar.jpg';"></img>*/}
              </div>
              <div className="col-8">
                  <ul>
                    <li>
                      <p><span className="font-weight-bold">Dueño: </span>Maria Sandoval Arrieta</p>
                    </li>
                    <li>
                      <p><span className="font-weight-bold">Edición: </span>Ultimate</p>
                    </li>
                    <li>
                      <p><span className="font-weight-bold">Versión: </span>2.0</p>
                    </li>
                    <li>
                      <p><span className="font-weight-bold">Consola: </span>Switch</p>
                    </li>
                  </ul>
              </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                  <label className="font-weight-bold">Condiciones:</label>
                  <div className="input-group">
                    <textarea rows="5" className="form-control" aria-label="With textarea"></textarea>
               </div>
            </div>
            </div>
          </div>
          {/* COMPONENTE */}
          <div className="row text-center">
            <div className="col-12">
              <button type="button" className="btn btn-primary">Registrar oferta</button>
            </div>
          </div>
            </Modal.Body>
          </div>
        </Modal>
      </>
    );
  }
}

export default DetalleJuego;
