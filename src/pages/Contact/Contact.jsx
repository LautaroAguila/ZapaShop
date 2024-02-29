import React, {useState} from 'react'
import Dashboard from '../../components/DashBoard/DashBoard'

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Su mensaje ha sido enviado satisfactoriamente. Nos contactaremos con usted a la brevedad. :)')
        history.back()
        
    };

    return (
        <Dashboard>
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
                    <label htmlFor="comment">Deja tu comentario:</label>
                    <textarea
                        type="textbox"
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                    {error && <p>{error}</p>}
                    <button className='botonContact' type="submit">Enviar</button>
                </form>
        </Dashboard>
    )
}
export default Contact
