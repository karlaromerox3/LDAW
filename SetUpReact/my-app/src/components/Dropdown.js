import React from 'react';
import Select from 'react-select';
import '../App.css';
import '../styles/modals.css';
import '../styles/dropdown.css';



class Dropdown extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      options: {}
    }
  }

  componentDidMount() {
    this.setState({
      options: this.props.items
    });
  }

  render(){
    const { options } = this.state;

    let optionsList = Object.keys(options).map((k) => {
      return (
        <option key={k} value={k}>{options[k]}</option>
      )
    }, this);
  
    return (
      <div>
        <select>
          {optionsList}
        </select>
      </div>
    );
  }

}

export default Dropdown;



