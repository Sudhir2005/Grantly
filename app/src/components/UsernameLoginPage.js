import React from 'react';
import { Link } from 'react-router-dom';
import './UsernameLoginPage.css';

const UsernameLoginPage = () => {
  return (
    <div className="username-login-container">
      <h2>Login with Username</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Security Pin" />
      <button>Login</button>
      <Link to="/forgot-pin">Forgot Security Pin?</Link>
      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default UsernameLoginPage;
