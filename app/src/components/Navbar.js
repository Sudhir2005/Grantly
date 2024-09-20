// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Ensure you have corresponding CSS for styling
import logo from '../assets/images/logo.png'; // Make sure you have this image

const Navbar = () => {
  return (
    <footer className="footer-navbar">
      <img src={logo} alt="Logo" className="footer-logo" />
      <nav className="footer-nav">
        <a href="/">Home</a>
        {/* Add more navigation links if needed */}
      </nav>
    </footer>
  );
};

export default Navbar;
