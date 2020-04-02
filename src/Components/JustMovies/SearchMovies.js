import React from 'react';
import NavBar from '../NavBar';
import MovieSearchResults from './MovieSearchResults';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';



 export default class SearchMovies extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             searchType: "",
             films: [],
             error: ""
         }
     }

     handleChange = (e) => {
         this.setState({ searchType: e.target.value });
     }
     
     handleType = (e) => {
         e.preventDefault();
         axios.get(`http://www.omdbapi.com/?apikey=407b600b&type=movie&s=${this.state.searchTerm}`)
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

     render() {
         return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>Movie Search</Card.Header>
                <Card.Body>
                <Form onSubmit={this.props.searchFunc} inline>
                <Form.Label>Movie</Form.Label>
                <FormControl onChange={this.handleChange} value={this.state.searchTerm} type="text" placeholder="Search movie" className="movieForm" />
    
                    <Button variant="primary" onClick={this.props.searchFunc}>
                        Submit
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
            {this.state.error ?
                <Alert variant="danger" onClose={() => this.setState({ error: '' })} dismissible>
                    <Alert.Heading>{this.state.error}</Alert.Heading>
                </Alert> : <MovieSearchResults films={this.state.films} getDetails={this.getDetails} /> 
            }
        </div>
         )
     }
 }