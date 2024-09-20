import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css'; // Ensure this file exists

const ProfilePage = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleNavigation = (path) => {
    setSidebarVisible(false); // Close the sidebar when navigating
    navigate(path);
  };

  return (
    <div className="profile-page">

       (
        <div className="sidebar">
          <h2>Profile</h2>
          <ul>
            <li onClick={() => handleNavigation('/home')}>Home</li>
            <li onClick={() => handleNavigation('/search')}>Search</li>
            <li onClick={() => handleNavigation('/add-document')}>Add Document</li>
            <li onClick={() => handleNavigation('/chatbot')}>Chatbot</li>
            <li onClick={() => handleNavigation('/login')}>Logout</li>
          </ul>
          <button onClick={toggleSidebar} className="close-button">Close</button>
        </div>
      )
    </div>
  );
};

export default ProfilePage;
