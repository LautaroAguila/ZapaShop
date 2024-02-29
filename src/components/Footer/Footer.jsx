import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'
import Logo from '../../logo/Logo'


function Footer (){
    return(
        <footer>
            <div >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <div className="containerFoot">
                    <Link to='/' className="logoContainer">
                        <Logo/>
                    </Link>
                    <div className='socialIcons'>
                        <a href="https://www.facebook.com/"><i className='fa-brands fa-facebook'></i></a>
                        <a href="https://www.instagram.com/"><i className='fa-brands fa-instagram'></i></a>
                        <a href="https://www.twitter.com/"><i className='fa-brands fa-twitter'></i></a>
                        <a href="https://www.youtube.com/"><i className='fa-brands fa-youtube'></i></a>
                    </div>
                
                    <div className="linksContainer">
                        <NavLink to='/contact'>Contacto</NavLink>
                    </div>
                    

                </div>
            </div>
        </footer>
    )
}

export default Footer;
