import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//Importing Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas,far)

export default function Search() {
    return (
        <div className="container">
        <div className="form-group">
            <label>Escribe el nombre de un juego...</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="searchInput"><FontAwesomeIcon icon={['fas', 'search']} color="#2b2d30"/></span>
                </div>
                <input type="text" className="form-control" placeholder="Animal crossing" aria-label="buscarJuego" aria-describedby="searchInput"></input>
            </div>
        </div>
      </div>
    )
}