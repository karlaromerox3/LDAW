import React, { Component } from 'react';
import '../card.css';
import 'bootstrap/dist/css/bootstrap.css';

//API CALLS
import axios from 'axios';
import { API_BASE_URL } from '../index';

//importing icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,far)

export default class CardR extends Component {
  state = {
    titles: [],
  }

  componentDidMount() {
    const url = API_BASE_URL + 'titles';
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ titles: data })
      console.log(this.state.titles)
     })
  }

  render() {

    return (
       <div className="container">
         <div className="books card-container">
        {this.state.titles.map((title) => (
        <div className="card-flip book ">

      <div className="card front">
        <img src={"http://localhost:8000/storage/images/" + title.path} className="card-img-top img-fluid" alt="portada del juego"></img>
        <div className="card-block text-center">
          <div className="row">
            <div className="col-12">
              <h6 className="card-title">{title.gameName}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="card back">
          <br></br>
          <div className="card-block text-center">
            <span className="badge badge-light">Edición</span>
            <p className="card-text">{title.edition}</p>
            <span className="badge badge-light">Versión</span>
            <p className="card-text">{title.version}</p>
            <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Ver juegos"><FontAwesomeIcon icon={['fas', 'angle-double-right']} /></button>
          </div>
        </div>

      </div>

        ))}
        </div>
       </div>
    );
  }
}