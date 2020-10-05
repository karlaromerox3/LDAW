import React, { Component } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import records from '../data/data.json';
import 'bootstrap/dist/css/bootstrap.css';

//Importing Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas,far)

class MisJuegos extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "name", 
                text: "Nombre",
                className: "name",
                sortable: true
            },
            {
                key: "address",
                text: "Edición",
                sortable: false
            },
            {
                key: "postcode",
                text: "Versión",
                className: "postcode",
                sortable: false
            },
            {
                key: "rating",
                text: "Consola",
                className: "rating",
                sortable: true
            },
            {
                key: "type_of_food",
                text: "# Ofertas",
                className: "type_of_food",
                sortable: true
            },
            {
                key: "action",
                text: "Acción",
                cell: (record, index) => {
                    return (
                        <React.Fragment>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    <FontAwesomeIcon icon={['fas', 'eye']} /> OFERTAS
                            </button>
                        </React.Fragment>
                    );
                }
            }
        ];
        this.config = {
            show_length_menu: false,
            page_size: 8,
            show_filter: true,
            show_pagination: true,
            pagination: "basic",
            no_data_text: 'No hay información disponible!',
            language: {
              filter: "Animal Crossing",
              pagination: {
                  first: <span><FontAwesomeIcon icon={['fas', 'angle-double-left']} /></span>,
                  previous: <span><FontAwesomeIcon icon={['fas', 'arrow-circle-left']} /></span>,
                  next: <span><FontAwesomeIcon icon={['fas', 'arrow-circle-right']} /></span>,
                  last: <span><FontAwesomeIcon icon={['fas', 'angle-double-right']} /></span>
              }
          },
        }
        this.state = {
            records: records
        }
    }

    editRecord = (record, index) => {
        console.log("Ver ofertas", index, record);
    }

    render() {
        return (
          <div className="container">
            <h2>MIS JUEGOS</h2>
            <div className="row">
              <div className="col-12 text-right">
            <label>Escribe el nombre de un juego: </label>
            </div>
            </div>
            <ReactDatatable
                config={this.config}
                records={this.state.records}
                columns={this.columns}
                tHeadClassName={"thead-light"}
                className={"table table-dark table-hover"}
                //loading={true}
                //total_record
                //dynamic={true}
            />
          </div>
        );
    }
}

export default MisJuegos;
//const app = document.getElementById("root");
//ReactDOM.render(<misJuegos/>, app);
