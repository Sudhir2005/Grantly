import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import AddDocumentPage from './components/DocumentAddPage';
import ChatbotPage from './components/ChatbotPage';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import ForgotPinPage from './components/ForgotPinPage';
import DocumentViewPage from './components/DocumentView'; // Import the new component
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const location = useLocation();
  const noFooterPaths = ['/login', '/create-account', '/forgot-pin', '/chatbot'];

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/add-document" element={<AddDocumentPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/forgot-pin" element={<ForgotPinPage />} />
        <Route path="/document/:docId" element={<DocumentViewPage />} /> {/* Add the document view route */}
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
