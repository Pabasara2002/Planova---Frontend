import React from 'react';
import './footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section: Logo + Social Icons (now vertical) */}
        <div className="footer-left">
          <img src="logo.png" alt="Planova Logo" className="footer-logo-large" />
          <div className="social-icons-below">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Right section: Contact Info */}
        <div className="footer-right">
          <p>33/1, 1st Lane, Medawala Road, Colombo. 10100. Sri Lanka</p>
          <p>+94 11012345</p>
          <p>info@planova.lk</p>
        </div>
      </div>

      <div className="footer-bottom">
        © The Wedding Planner LK. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
