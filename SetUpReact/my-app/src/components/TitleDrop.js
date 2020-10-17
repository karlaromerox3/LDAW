import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form} from 'react-bootstrap';

//API CALLS
import axios from 'axios';
import { API_BASE_URL } from '../index';

export default class TitleDrop extends Component {
  state = {
    titles: []
  }
  
  componentDidMount() {
    const url = API_BASE_URL + 'titles/';
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ titles: data })
      console.log(this.state.titles)
     })
  }

  render() {

    return (
       <div>
        <Form.Control as="select" custom>
        {this.state.titles.map((title) => (
            <option>{title.gameName} {title.edition} {title.version}</option>
        ))}
        </Form.Control>
       </div>
    );
  }
}