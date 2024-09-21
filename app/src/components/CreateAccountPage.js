import React from 'react';
import './CreateAccountPage.css';
import { Link } from 'react-router-dom';

const CreateAccountPage = () => {
  return (
    <div className="create-account-container">
      <h2>Create an Account</h2>
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Aadhaar Number" />
      <input type="password" placeholder="Create Security Pin" />
      <button>Create Account</button>
      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default CreateAccountPage;
