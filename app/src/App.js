// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import AddDocumentPage from './components/DocumentAddPage';
import ChatbotPage from './components/ChatbotPage';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import ForgotPinPage from './components/ForgotPinPage';
import LandingPage from './components/LandingPage'; 
import Footer from './components/Footer';
import DocumentUpload from './components/DocumentUpload';
import './App.css';

const App = () => {
  const location = useLocation();

  const noFooterPaths = ['/login', '/create-account', '/forgot-pin', '/chatbot', '/'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/add-document" element={<AddDocumentPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/forgot-pin" element={<ForgotPinPage />} />
        
        {/* New Route for Document Upload */}
        <Route path="/upload-document" element={<DocumentUpload />} /> {/* Add the upload document route */}
      </Routes>

      {/* Conditional rendering of Footer */}
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;
