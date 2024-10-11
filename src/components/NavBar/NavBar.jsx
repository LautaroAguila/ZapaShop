import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../logo/Logo';
import './NavBar.css'; // Estilos personalizados

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" variant="light" className="shadow-sm">
            <Container>
                <Row className="w-100">
                    <Col className="d-flex align-items-center justify-content-start">
                        <Navbar.Brand as={Link} to="/">
                            <Logo className="rounded-logo" />
                        </Navbar.Brand>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link as={NavLink} to="/" exact className="nav-link">
                                    Inicio
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/products" className="nav-link">
                                    Productos
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/contact" className="nav-link">
                                    Contacto
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <Nav.Link as={Link} to="/cart" aria-label="Cart" className="nav-link">
                            <CartWidget />
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavBar;

