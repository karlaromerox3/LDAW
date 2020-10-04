import React from 'react';
import Select from 'react-select';
import '../App.css';
import '../styles/modals.css';
import '../styles/dropdown.css';



class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  }

  //AQUI DEBEMOS LLAMAR AL API
  componentDidMount() {
    this.setState({
      options: [
        { id: '1', name: 'Prueba 1' },
        { id: '2', name: 'Prueba 2' },
        { id: '3', name: 'Prueba 3' }
      ]
    });
  }

  render() {
    const { options } = this.state;

    let optionsList = options.length > 0
      && options.map((item, i) => {
        return (
          <option key={i} value={item.id}>{item.name}</option>
        )
      }, this);

    return (
      <React.StrictMode>
        <div class="form-group">
        <label for="select">{this.props.titulo}</label> <br/>
        <select className="browser-default custom-select" id="select">
          {optionsList}
        </select>
        </div>
        
      </React.StrictMode>
    );
  }

}

export default Dropdown;



