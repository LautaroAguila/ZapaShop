import React from 'react'
import PropTypes from 'prop-types'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


function NavBar (){
    return(
        <header>
            <nav>
                <div className="containerNav">
                    <div className="logoContainer">
                        <img src="src/logo/logo1.png" alt="" />
                    </div>
                    
                    <div className="linksContainer">
                        <a href="">Inicio</a>
                        <a href="">Productos</a>
                        <a href="">Contacto</a>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;

