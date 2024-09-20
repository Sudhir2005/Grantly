// src/components/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [selectedDocId, setSelectedDocId] = useState(null);
  
  // Sample documents (replace with your actual documents)
  const documents = [
    { id: 1, title: 'Document 1', imageUrl: 'path_to_image1.jpg' },
    { id: 2, title: 'Document 2', imageUrl: 'path_to_image2.jpg' },
    // Add more documents as needed
  ];

  const handleDocumentClick = (id) => {
    setSelectedDocId(id);
    // Show a prompt for security pin (you could also use a modal)
    const enteredPin = prompt('Enter your 4-digit security pin:');
    if (enteredPin === '1234') { // Replace with actual pin check
      navigate(`/document/${id}`);
    } else {
      alert('Incorrect pin. Please try again.');
    }
  };

  return (
    <div className="home-page">
      <h1>Grantly</h1>
      <div className="documents">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="document-box"
            onClick={() => handleDocumentClick(doc.id)}
          >
            <img src={doc.imageUrl} alt={doc.title} />
            <h2>{doc.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
