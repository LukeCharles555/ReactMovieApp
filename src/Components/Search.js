import React from 'react';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            films: [],
            error: ""
        }
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://www.omdbapi.com/?apikey=407b600b&s=${this.state.searchTerm}`)
        .then(response => {
            if (response.data.Error) {
                this.setState({ error: response.data.Error });
            } else {
                this.setState({ films: response.data.Search, error: "" });
            }
        }).catch(err => {
            console.error(err);
            this.setState({ error: err });
        });
    }

    getDetails = (id) => {
        console.log(id);
        this.props.history.push(`details/${id}`);
    }

    render() {
        return (
            <div>
                <NavBar searchTerm={this.state.searchTerm} handleChange={this.handleChange} searchFunc={this.handleSearch} />
                {this.state.error ?
                <Alert variant="danger" onClose={() => this.setState({ error: '' })} dismissible>
                    <Alert.Heading>{this.state.error}</Alert.Heading>
                </Alert> : <SearchResults films={this.state.films} getDetails={this.getDetails} /> 
            }
            </div>
        )
    }
}