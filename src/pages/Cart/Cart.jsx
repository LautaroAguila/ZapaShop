import React, { useState } from 'react';
import { useCartContex } from '../../routing/contex/cartContex';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './Cart.css'; // Asegúrate de que este archivo contenga tus estilos personalizados

const Cart = () => {
    const { cart, clearCart, total } = useCartContex();
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const clear = () => {
        clearCart();
    };

    const form = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            setError('El carrito está vacío');
            return;
        }
        // Aquí podrías agregar la lógica para enviar la compra o hacer alguna acción.
        alert('COMPRA REALIZADA');
        clearCart();
    };

    if (cart.length === 0) {
        return (
            <Container className="empty-cart text-center mt-5">
                <FaShoppingCart size={100} color="#FFFFF" style={{ height: '713px' }} />
                <h3>El carro está vacío.</h3>
                <p>Vuelve a Productos para llenar el carrito.</p>
            </Container>
        );
    }

    return (
        <Container className="mt-5" >
            <Row>
                <Col>
                    <h2 className="mb-3">Carrito de Compras</h2>
                    <div className="list">
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    <img
                                        className="imgCart rounded"
                                        src={item.item.image}
                                        alt={item.item.title}
                                    />
                                    {item.item.title} - Cantidad: {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button variant="danger" className="mb-3" onClick={clear}>
                        Borrar Carrito
                    </Button>
                    <p>Total: ${total}</p>
                    <Button onClick={form} className="mb-3">
                        Comprar
                    </Button>
                    {showForm && (
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
                            <Form.Group controlId="phone" className="mb-3">
                                <Form.Label>Número de teléfono:</Form.Label>
                                <Form.Control
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Button type="submit" className="mb-3">
                                Enviar
                            </Button>
                        </Form>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
