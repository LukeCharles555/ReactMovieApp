import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default class Film extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.Poster} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>
                        Year: {this.props.Year}
                    </Card.Subtitle>
                    <Button variant="primary" onClick={() => this.props.getDetails(this.props.imdbID)}>Details</Button>
                </Card.Body>
            </Card>
        )
    }
}