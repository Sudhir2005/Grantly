import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPinPage.css';

const ForgotPinPage = () => {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');

  const handleOtpRequest = () => {
    // Handle OTP request here
    setStep(2);
  };

  return (
    <div className="forgot-pin-container">
      <h2>Forgot Security Pin</h2>
      {step === 1 ? (
        <>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button onClick={handleOtpRequest}>Send OTP</button>
          <Link to="/">Back to Login</Link>
        </>
      ) : (
        <>
          <input type="text" placeholder="Enter OTP" />
          <input type="password" placeholder="New Security Pin" />
          <button>Reset Pin</button>
          <Link to="/">Back to Login</Link>
        </>
      )}
    </div>
  );
};

export default ForgotPinPage;
