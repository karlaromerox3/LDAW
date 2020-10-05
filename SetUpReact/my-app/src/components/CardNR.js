import React from 'react';
import '../card.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function CardNR() {
    return (
<div className="container"> 
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 card-container">
      {/* CARD COMPONENT STARTS */}
      <div className="card-flip">
        {/* FRONT STARTS*/}
        <div className="card front">
          <img src="https://cdn2.downdetector.com/static/uploads/logo/How-to-play-Fall-Guys-beta-Ultimate-Knockout-joins-PS-Plus-very-soon_dA5IBWW.jpg" class="card-img-top img-fluid" alt="portada de juego"></img>
          <div className="card-block text-center">
            <h6 className="card-title font-weight-bold">Animal Crossing</h6>
          </div>
        </div>
        {/* FRONT ENDS */}

        {/* BACK STARTS */}
        <div className="card back">
          <br></br><br></br>
          <div className="card-block text-center">
            <span className="badge badge-light">Edición</span>
            <p className="card-text">Ultimate</p>
            <span className="badge badge-light">Versión</span>
            <p className="card-text">2.0</p>
          </div>
        </div>
        {/* BACK ENDS */}
      </div>
    {/* CARD COMPONENT ENDS*/}
    </div>
  </div>
</div>
    )
}
