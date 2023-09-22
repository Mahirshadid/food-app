import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="fa__navbar">
        <div className="fa__navbar-links">
            <div className="fa__navbar-links_logo">
            <img src={logo} />
            </div>
            <div className="fa__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#product">Product</a></p>
            <p><a href="#faq">FAQ</a></p>
            <p><a href="#contact">Contact</a></p>
            </div>
        </div>
        <div className="fa__navbar-menu">
            {toggleMenu
            ? <RiCloseLine color="#252B42" size={25} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#252B42" size={25} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="fa__navbar-menu_container scale-up-center">
            <div className="fa__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#product">Product</a></p>
                <p><a href="#faq">FAQ</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
            </div>
            )}
        </div>
        </div>
    );
};

export default Navbar;