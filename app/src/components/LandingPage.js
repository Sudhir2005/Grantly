// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // To reveal the content after a short delay for added effect
    setTimeout(() => setShowContent(true), 500);
  }, []);

  return (
    <div className="landing-page">
      <div className="animated-background"></div> {/* Floating shapes */}
      
      <div className={`landing-content ${showContent ? 'visible' : ''}`}>
        <h1 className="title">Welcome to Scholarship Portal</h1>
        <p>Your gateway to securing the best scholarships</p>
        <Link to="/login">
          <button className="landing-login-btn">
            <span>Login</span>
            <div className="ripple"></div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
