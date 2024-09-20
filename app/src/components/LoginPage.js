import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [loginType, setLoginType] = useState('aadhaar'); // 'aadhaar' or 'username'
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState('');
  const [securityPin, setSecurityPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAadhaarLogin = (e) => {
    e.preventDefault();
    // Add authentication logic for Aadhaar and OTP
    if (aadhaar.length === 12 && otp.length === 6) {
      navigate('/home'); // Redirect to home page on successful login
    } else {
      setError('Invalid Aadhaar or OTP.');
    }
  };

  const handleUsernameLogin = (e) => {
    e.preventDefault();
    // Add authentication logic for Username and Security Pin
    if (username && securityPin) {
      navigate('/home'); // Redirect to home page on successful login
    } else {
      setError('Invalid Username or Security Pin.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); // Redirect to account creation page
  };

  const handleForgotPin = () => {
    navigate('/reset-pin'); // Redirect to reset pin page
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>

      {error && <p className="error">{error}</p>}

      <div className="login-type-selector">
        <button className={loginType === 'aadhaar' ? 'active' : ''} onClick={() => setLoginType('aadhaar')}>
          Aadhaar Login
        </button>
        <button className={loginType === 'username' ? 'active' : ''} onClick={() => setLoginType('username')}>
          Username Login
        </button>
      </div>

      {loginType === 'aadhaar' ? (
        <form onSubmit={handleAadhaarLogin}>
          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            maxLength={12}
            required
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleUsernameLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Security Pin"
            value={securityPin}
            onChange={(e) => setSecurityPin(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p className="forgot-pin" onClick={handleForgotPin}>
            Forgot Security Pin?
          </p>
        </form>
      )}

      <button className="create-account-btn" onClick={handleCreateAccount}>
        Create a New Account
      </button>
    </div>
  );
};

export default LoginPage;
