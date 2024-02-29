import React, {useState} from 'react'
import { useCartContex } from '../../routing/contex/cartContex'
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, total } = useCartContex();
    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState('');

    console.log(cart)

    const clear = () => {
        console.log(`BORRASTE`);
        clearCart(); 
    }

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            setError('El carrito está vacío');
            return;
        }else{
            alert('COMPRA REALIZADA')
            clearCart()
        }
        
        
    };

    return (
        <div className='body'>
            <h2>Cart Items:</h2>
            <div className='list'>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <img className="imgCart" src={item.item.image} alt="" />{item.item.title} - Cantidad: {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={clear}>Borrar Carrito</button>
            <p>${total}</p>
            <button onClick={toggleForm}>COMPRAR</button>
            {showForm && (
                <form className="formContainer" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="address">Dirección:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <label htmlFor="phone">Número de teléfono:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                {error && <p>{error}</p>}
                <button type="submit">Enviar</button>
            </form>
            )}
        </div>
    );
}

export default Cart