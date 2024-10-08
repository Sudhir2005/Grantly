// src/components/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedDocId, setSelectedDocId] = useState(null);
  
  // Sample documents (replace with your actual documents)
  const documents = [
    { id: 1, title: 'Document 1', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Income_certificate.jpg' },
    { id: 2, title: 'Document 2', imageUrl: 'https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/11/image-170-1024x683-1.png' },
    { id: 3, title: 'Document 3', imageUrl: 'https://imgv2-2-f.scribdassets.com/img/document/452310013/original/4adcb3a097/1726146275?v=1' },
    { id: 4, title: 'Document 4', imageUrl: 'https://www.pancardapp.com/blog/wp-content/uploads/2019/04/sample-pan-card.jpg' },
    { id: 5, title: 'Document 5', imageUrl: 'https://www.tesz.in/assets/guides/5ea2923ea0f76-img-165.jpg' },
    { id: 6, title: 'Document 6', imageUrl: 'https://th-i.thgim.com/public/news/national/tamil-nadu/ek15l0/article66450521.ece/alternates/LANDSCAPE_1200/New%20voter%20ID%20card%20in%20TN.jpg' },
  ];

  const handleDocumentClick = (id) => {
    setSelectedDocId(id);
    const enteredPin = prompt('Enter your 4-digit security pin:');
    if (enteredPin === '1234') { // Replace with actual pin check
      navigate(`/document/${id}`);
    } else {
      alert('Incorrect pin. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#2575fc' }}>Grantly</h1>
      
      <div className="row">
        {documents.map((doc) => (
          <div className="col-md-4 col-sm-6 mb-4" key={doc.id}>
            <div className="card h-100" onClick={() => handleDocumentClick(doc.id)} style={{ cursor: 'pointer' }}>
              <img src={doc.imageUrl} className="card-img-top" alt={doc.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{doc.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
