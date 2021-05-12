import React from 'react';
import Logo from '../Logo/logo.png';
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="brand-name">
                <h1>Diet Analaysis</h1>
            </div>
        </div>
    )
}

export default Navbar
