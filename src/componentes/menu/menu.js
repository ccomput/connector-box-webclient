import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    return (
        <div>
            <div className="container">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">CONNECTORBOX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                          <Nav.Link href="/sobre">Sobre</Nav.Link>
                          <Nav.Link href="/conectores">Conectores</Nav.Link>
                          <Nav.Link href="precos">Preços</Nav.Link>
                          <Nav.Link href="/login">Login</Nav.Link>
                          <Nav.Link href="/cadastro">Cadastro</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Menu;