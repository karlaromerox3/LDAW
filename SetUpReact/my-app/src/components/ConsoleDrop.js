import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Form} from 'react-bootstrap';

//API CALLS
import axios from 'axios';
import { API_BASE_URL } from '../index';

export default class ConsoleDrop extends Component {
  state = {
    consoles: []
  }
  
  componentDidMount() {
    const url = API_BASE_URL + 'consoles/';
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ consoles: data })
      console.log(this.state.consoles)
     })
  }

  render() {

    return (
       <div>
        <Form.Control as="select" custom>
        {this.state.consoles.map((console) => (
            <option>{console.console}</option>
        ))}
        </Form.Control>
       </div>
    );
  }
}