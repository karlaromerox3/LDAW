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

class MisJuegos extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "name",
                text: "Name",
                className: "name",
                sortable: true
            },
            {
                key: "address",
                text: "Address",
                sortable: true
            },
            {
                key: "postcode",
                text: "Postcode",
                className: "postcode",
                sortable: true
            },
            {
                key: "rating",
                text: "Rating",
                className: "rating",
                sortable: true
            },
            {
                key: "type_of_food",
                text: "Type of Food",
                className: "type_of_food",
                sortable: true
            }
        ];
        this.config = {
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            button: {
                excel: false,
                print: false
            }
        }
        this.state = {
            total_pages: 0,
            records: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = (queryString = "") => {
        let url = "http://tradekisan.in/react-datatable/sampleAPI/?" + queryString
        fetch(url, {
            headers: {
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                total: res.total,
                records: res.result
            })
        })

    }

    tableChangeHandler = data => {
        let queryString = Object.keys(data).map((key) => {
            if(key === "sort_order" && data[key]){
                return encodeURIComponent("sort_order") + '=' + encodeURIComponent(data[key].order) + '&' + encodeURIComponent("sort_column") + '=' + encodeURIComponent(data[key].column)
            } else {
                return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
            }
            
        }).join('&');

        this.getData(queryString);
    }

    render() {
        return (
            <ReactDatatable
                config={this.config}
                records={this.state.records}
                columns={this.columns}
                dynamic={true}
                total_record={records.length}
                onChange={this.tableChangeHandler}/>
        );
    }
}

export default MisJuegos;
