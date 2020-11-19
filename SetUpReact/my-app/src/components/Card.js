import React, { Component } from 'react';
import { Link } from "react-router-dom";

//STYLES
import '../card.css';
import 'bootstrap/dist/css/bootstrap.css';

//COMPONENTS
import {Button} from 'reactstrap';
import SimpleTooltip from '../components/SimpleTooltip';


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
    this.getTitles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.inputValue != prevProps.inputValue) {
      this.getTitles();
    }
  }

  getTitles() {
    const params = {
      inputValue: this.props.inputValue
    }
    axios.post(API_BASE_URL + 'titles/filter', params)
      .then(res => {
        const titles = res.data;
        
        this.setState({ titles });

        console.log(this.state);
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
            <Link   to={{
                        pathname: 'VerJuegos/'+ title.id,
                        state:title.id
                      }}>
            <Button color="primary" size="sm" id="verJuegos"><FontAwesomeIcon icon={['fas', 'angle-double-right']} /></Button>
              <SimpleTooltip placement="top" target="verJuegos">Ver juegos</SimpleTooltip>
            </Link>
          </div>
        </div>

      </div>

        ))}
        </div>
       </div>
    );
  }
}