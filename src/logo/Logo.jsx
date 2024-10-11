import React from 'react'
import logo from "../logo/logo1.png"
import './Logo.css'
function Logo({ className }) {
    return <img src={logo} alt="Logo" className={className} />;
}

export default Logo;
