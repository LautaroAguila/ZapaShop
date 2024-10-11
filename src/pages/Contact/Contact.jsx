import React, { useState } from 'react';
import Dashboard from '../../components/DashBoard/DashBoard';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './Contact.css'; // Importa los estilos CSS personalizados
import Logo from '../../logo/Logo';
import '../../logo/Logo.css'; // Asegúrate de importar el CSS del logo

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Su mensaje ha sido enviado satisfactoriamente. Nos contactaremos con usted a la brevedad. :)');
        history.back();
    };

    return (
        <Dashboard>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <h2 className="text-center mb-4">Contacto</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name" className="mb-3">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label>Correo electrónico:</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="address" className="mb-3">
                                <Form.Label>Dirección:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="comment" className="mb-3">
                                <Form.Label>Deja tu comentario:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Button className="botonContact" type="submit" variant="primary" block>Enviar</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-4 justify-content-center">
                    <Col xs="auto">
                        <h3 className="text-center">¡Gracias por elegirnos!</h3>
                        <div className="logo-container">
                            <Logo className="img-fluid" /> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </Dashboard>
    );
}

export default Contact;
