import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/home" className="footer-icon" aria-label="Home">
        <img src="https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg" alt="Home" />
      </Link>
      <Link to="/search" className="footer-icon" aria-label="Search">
        <img src="https://th.bing.com/th/id/OIP.Ngz1vxipPFvDuh7vDj6k5AHaHw?w=191&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Search" />
      </Link>
      <Link to="/add-document" className="footer-icon" aria-label="Add Document">
        <img src="https://th.bing.com/th/id/OIP.EqtxAPpfUE9B88j2rkCQcAHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Add Document" />
      </Link>
      <Link to="/chatbot" className="footer-icon" aria-label="Chatbot">
        <img src="https://th.bing.com/th/id/OIP.X1T9Pq-yZyCzWFdkRY6qkgHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Chatbot" />
      </Link>
      <Link to="/profile" className="footer-icon" aria-label="Profile">
        <img src="https://th.bing.com/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Profile" />
      </Link>
    </footer>
  );
};

export default Footer;
