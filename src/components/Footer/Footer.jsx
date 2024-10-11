import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';
import Logo from '../../logo/Logo';

function Footer() {
    return (
        <footer className="fot py-4">
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
                crossorigin="anonymous" 
                referrerpolicy="no-referrer" 
            />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center mb-3 mb-md-0">
                        <Link to='/' className="d-inline-block">
                            <Logo className="rounded-logo" />
                        </Link>
                    </div>
                    <div className="col-md-4 text-center mb-3 mb-md-0">
                        <div className='social-icons'>
                            <a href="https://www.facebook.com/" className="text-dark me-3"><i className='fa-brands fa-facebook fa-lg'></i></a>
                            <a href="https://www.instagram.com/" className="text-dark me-3"><i className='fa-brands fa-instagram fa-lg'></i></a>
                            <a href="https://www.twitter.com/" className="text-dark me-3"><i className='fa-brands fa-twitter fa-lg'></i></a>
                            <a href="https://www.youtube.com/" className="text-dark"><i className='fa-brands fa-youtube fa-lg'></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="links-container">
                            <NavLink to='/contact' className="text-dark">Contacto</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
