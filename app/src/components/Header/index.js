import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import './styles.css';

export default class Header extends Component {

    componentDidMount() {

    }


    render() {

        return (
            <Navbar collapseOnSelect expand="lg" className="p-0" bg="info" variant="light" >
                <Navbar.Brand href="#home" className="pl-5">
                    <img src={logo} width="120"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="p-0">
                    <Nav className="ml-auto p-0 height-5 navLeft">
                        <Nav.Link className="pr-5" href="#features">Adoção</Nav.Link>
                        <Nav.Link className="pr-5" href="#pricing">Doações</Nav.Link>
                        <Nav.Link className="pr-5" href="#pricing">Eventos</Nav.Link>
                        <Nav.Link className="pr-5" >Blog</Nav.Link>
                        <Nav.Link className="pr-5" >Serviços</Nav.Link>
                    </Nav>
                    <Nav className="navRight p-0 height-5">
                        <Nav.Link className="link" href="#deets">sou uma ONG</Nav.Link>
                        <Nav.Link className="link" eventKey={2} href="#memes">
                            entrar
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}