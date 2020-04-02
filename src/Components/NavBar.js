import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import SearchMovies from './JustMovies/SearchMovies';


export default function NavBar(props) {
    return (
        <div className="navBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">The Movie Database</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="./SearchMovies">Films</Nav.Link>
                    <Nav.Link href="#series">Series</Nav.Link>
                    <NavDropdown title="Other options" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#aboutUs">About us</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#contactUs">Contact us</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Form onSubmit={props.searchFunc} inline>
                        <FormControl onChange={props.handleChange} value={props.searchTerm} type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info" onClick={props.searchFunc}>Search</Button>
                    </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}