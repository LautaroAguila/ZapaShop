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

    

    const clear = () => {
        console.log(`BORRASTE`);
        clearCart(); 
    }

    const form = () => {
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

    if(cart.length === 0){
        return (
            <div class="empty-cart">
                <svg viewBox="656 573 264 182" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="shopping-bag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(721.000000, 630.000000)">
                        <polygon id="Fill-10" fill="#FFA800" points="4 29 120 29 120 0 4 0"></polygon>
                        <polygon id="Fill-14" fill="#FFE100" points="120 29 120 0 115.75 0 103 12.4285714 115.75 29"></polygon>
                        <polygon id="Fill-15" fill="#FFE100" points="4 29 4 0 8.25 0 21 12.4285714 8.25 29"></polygon>
                        <polygon id="Fill-33" fill="#FFA800" points="110 112 121.573723 109.059187 122 29 110 29"></polygon>
                        <polygon id="Fill-35" fill-opacity="0.5" fill="#FFFFFF" points="2 107.846154 10 112 10 31 2 31"></polygon>
                        <path d="M107.709596,112 L15.2883462,112 C11.2635,112 8,108.70905 8,104.648275 L8,29 L115,29 L115,104.648275 C115,108.70905 111.7365,112 107.709596,112" id="Fill-36" fill="#FFE100"></path>
                        <path d="M122,97.4615385 L122,104.230231 C122,108.521154 118.534483,112 114.257931,112 L9.74206897,112 C5.46551724,112 2,108.521154 2,104.230231 L2,58" id="Stroke-4916" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <polyline id="Stroke-4917" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="2 41.5 2 29 122 29 122 79"></polyline>
                        <path d="M4,50 C4,51.104 3.104,52 2,52 C0.896,52 0,51.104 0,50 C0,48.896 0.896,48 2,48 C3.104,48 4,48.896 4,50" id="Fill-4918" fill="#000000"></path>
                        <path d="M122,87 L122,89" id="Stroke-4919" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <polygon id="Stroke-4922" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="4 29 120 29 120 0 4 0"></polygon>
                        <path d="M87,46 L87,58.3333333 C87,71.9 75.75,83 62,83 L62,83 C48.25,83 37,71.9 37,58.3333333 L37,46" id="Stroke-4923" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M31,45 C31,41.686 33.686,39 37,39 C40.314,39 43,41.686 43,45" id="Stroke-4924" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M81,45 C81,41.686 83.686,39 87,39 C90.314,39 93,41.686 93,45" id="Stroke-4925" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M8,0 L20,12" id="Stroke-4928" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M20,12 L8,29" id="Stroke-4929" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M20,12 L20,29" id="Stroke-4930" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M115,0 L103,12" id="Stroke-4931" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M103,12 L115,29" id="Stroke-4932" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M103,12 L103,29" id="Stroke-4933" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                    </g>
                </svg>
                <h3>El carro esta vacio.</h3>
                <p>Volve a Productos para llenar el carrito.</p>
            </div>
        );
    }

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
            <button onClick={form}>COMPRAR</button>
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