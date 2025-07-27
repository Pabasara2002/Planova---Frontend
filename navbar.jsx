import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.png" alt="Planova Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact Us</a>
        <a href="/customPackages">Custom Packages</a>
        <a href="/login">
          <button className="login-button">Login</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
