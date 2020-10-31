import React from 'react';

//API CALLS
import axios from 'axios';
import { API_BASE_URL } from '../index';

//Components
import { Link } from "react-router-dom";
import {Table, Button, Row, ModalBody, ModalFooter, Modal} from 'reactstrap';
import Header3 from './Header3';

//Importing Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)
  
export default class AdminTable extends React.Component {
  state = {
    games: [],
  }
  
  componentDidMount() {
    let id = this.props.dataFromParent;
    console.log(id);
    axios.get(API_BASE_URL + 'games')
      .then(res => {
        const games = res.data;
        this.setState({ games });
      })
  }

  render() {
    return (
      <div className="container">

        <table className="table table-dark table-hover">
            <thead className="thead-light">
              <tr>
                  <th>Titulo</th>
                  <th>Edicion</th>
                  <th>Consola</th>
                  <th># Ofertas</th>
                  <th>Accion</th>
              </tr>
            </thead>
  
            <tbody >
              {this.state.games.map((game) => (
                <tr key={game.id}>
                  <td>{game.title_id}</td>
                  <td>{game.fechaNacimiento}</td>
                  <td>{game.dxMedico}</td>
                  <td>{game.headquarter_id}</td>
                  <td>
                      <Row>
                          <Link to='/admin/Beneficiarias/SpecificView'>
                          <Button color="primary" size="sm" id="verDetalle"><FontAwesomeIcon icon={['fas', 'eye']} /></Button>
                          </Link>
                      </Row>
                  </td>
                </tr>
              ))}
            </tbody>
  
        </table>

      </div>
    )
  }
} 