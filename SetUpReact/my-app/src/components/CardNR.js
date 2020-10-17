import React, { Component } from 'react';
import '../card.css';
import 'bootstrap/dist/css/bootstrap.css';

//API CALLS
import axios from 'axios';
import { API_BASE_URL } from '../index';


export default class CardR extends Component {
  state = {
    titles: []
  }

  componentDidMount() {
    const url = API_BASE_URL + 'titles/index';
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
          /* CARD COMPONENT STARTS */
      <div className="card-flip book ">
      {/* FRONT STARTS */}
      <div className="card front">
        <img src={title.path} className="card-img-top img-fluid" alt="portada del juego"></img>
        <div className="card-block text-center">
          <div className="row">
            <div className="col-12">
              <h6 className="card-title">{title.gameName}</h6>
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
            <p className="card-text">{title.edition}</p>
            <span className="badge badge-light">Versión</span>
            <p className="card-text">{title.version}</p>
          </div>
        </div>
        {/* BACK ENDS */}
      </div>
    /* CARD COMPONENT ENDS */
        ))}
        </div>
       </div>
    );
  }
}
