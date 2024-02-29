import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../../logo/Logo'


function NavBar (){
    return(
        <header>
            <nav>
                <div className="containerNav">
                    <Link to='/' className="logoContainer">
                        <Logo/>
                    </Link>
                    
                    <div className="linksContainer">
                        <NavLink to='/'>Inicio</NavLink>
                        <NavLink to='/products'>Productos</NavLink>
                        <NavLink to='/contact'>Contacto</NavLink>
                    </div>
                    <Link to='/cart'><CartWidget/></Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;

