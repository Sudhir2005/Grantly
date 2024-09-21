import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './LoginPage.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const LoginPage = () => {
  const [loginType, setLoginType] = useState('aadhaar');
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState('');
  const [securityPin, setSecurityPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAadhaarLogin = (e) => {
    e.preventDefault();
    if (aadhaar.length === 12 && otp.length === 6) {
      setError('');
      toast.success('Successfully logged in!', { position: "top-center", autoClose: 2000 });
      setTimeout(() => navigate('/home'), 3000);
    } else {
      setError('Invalid Aadhaar or OTP.');
    }
  };

  const handleUsernameLogin = (e) => {
    e.preventDefault();
    if (username && securityPin) {
      setError('');
      toast.success('Successfully logged in!', { position: "top-center", autoClose: 2000 });
      setTimeout(() => navigate('/home'), 3000);
    } else {
      setError('Invalid Username or Security Pin.');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center login-bg">
      <ToastContainer />

      {/* Header */}
      <header className="w-100">
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'transparent' }}> {/* Removed bg-white */}
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'transparent' }}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/564px-Emblem_of_India.svg.png"
                alt="Indian Emblem"
                className="navbar-brand"
                style={{ width: '50px', marginRight: '10px' }}
              />
              <h1
                className="navbar-brand mb-0 h1"
                style={{ fontWeight: 'bold', fontSize: '28px', color: '#f8f9fa', backgroundColor: 'transparent' }}
              >
                Grantly
              </h1>
            </div>
          </div>
        </nav>
      </header>

      {/* Login Form */}
      <div className="card p-4 shadow-sm w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>

        {error && <p className="alert alert-danger text-center">{error}</p>}

        <div className="btn-group w-100 mb-3">
          <button className={`btn ${loginType === 'aadhaar' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setLoginType('aadhaar')}>
            Aadhaar Login
          </button>
          <button className={`btn ${loginType === 'username' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setLoginType('username')}>
            Username Login
          </button>
        </div>

        {loginType === 'aadhaar' ? (
          <form onSubmit={handleAadhaarLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Aadhaar Number"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                maxLength={12}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
        ) : (
          <form onSubmit={handleUsernameLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Security Pin"
                value={securityPin}
                onChange={(e) => setSecurityPin(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
        )}

        <div className="mt-3 text-center">
          <p className="mb-1">
            <a href="/reset-pin" className="text-primary">Forgot Security Pin?</a>
          </p>
          <button className="btn btn-link text-decoration-none" onClick={() => navigate('/create-account')}>
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
