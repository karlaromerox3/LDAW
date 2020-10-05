import React from 'react';
import '../card.css';
import 'bootstrap/dist/css/bootstrap.css';

//Importing Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,far)

export default function CardR() {
    return (
<div className="container"> 
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 card-container">
      {/* CARD COMPONENT STARTS */}
      <div className="card-flip">
        {/* FRONT STARTS */}
        <div className="card front">
          <img src="https://cdn2.downdetector.com/static/uploads/logo/How-to-play-Fall-Guys-beta-Ultimate-Knockout-joins-PS-Plus-very-soon_dA5IBWW.jpg" className="card-img-top img-fluid" alt="portada del juego"></img>
          <div className="card-block text-center">
          	<div className="row">
          		<div className="col-8">
          			<h6 className="card-title"> Animal Crossing</h6>
          		</div>
          		<div className="col-4">
          			<h5><span className="badge badge-light">312</span></h5>
          		</div>
          	</div>
          </div>
        </div>
        {/* FRONT ENDS */}

        {/* BACK STARTS */}
        <div className="card back">
          <br></br>
          <div className="card-block text-center">
            <span className="badge badge-light">Edición</span>
            <p className="card-text">Ultimate</p>
            <span className="badge badge-light">Versión</span>
            <p className="card-text">2.0</p>
            <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Ver juegos"><FontAwesomeIcon icon={['fas', 'angle-double-right']} /></button>
          </div>
        </div>
        {/* BACK ENDS */}
      </div>
    </div>
    {/* CARD COMPONENT ENDS */}
  </div>
</div>
    )
}
