import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    
    return (
        <div className="header-container">
        <img src={logo} alt="" />
        <h2>Build A Software Company</h2>
        <h2>The software industry has fantastic potential for those with the right talent and understanding of how to run a business.</h2>
        <h3>Total Budget : $200 billion</h3>
       
            
        </div>
    );
};

export default Header;