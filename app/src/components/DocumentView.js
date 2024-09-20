import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DocumentViewPage = () => {
  const { docId } = useParams(); // Get the document ID from the URL
  const navigate = useNavigate();

  // Simulate fetching document based on the docId
  const documents = {
    1: {
      id: 1,
      title: "Income Certificate",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Income_certificate.jpg",
      securityPin: "1234",
    },
    2: {
      id: 2,
      title: "Sample Document 2",
      imageUrl: "https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/11/image-170-1024x683-1.png",
      securityPin: "4321",
    },
    // Add more documents if needed
  };

  const document = documents[docId];
  
  const [pin, setPin] = useState('');
  const [pinVerified, setPinVerified] = useState(false);
  const [error, setError] = useState('');

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === document.securityPin) {
      setPinVerified(true);
      setError('');
    } else {
      setError('Incorrect security pin. Please try again.');
    }
  };

  const handleDownload = () => {
    const link = document.imageUrl;
    const a = document.createElement('a');
    a.href = link;
    a.download = document.title;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="document-view">
      <button onClick={() => navigate('/home')}>Back</button>
      <h1>{document.title}</h1>

      {!pinVerified ? (
        <div className="security-pin-check">
          <h3>Enter Security Pin to View Document</h3>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              placeholder="Enter Security Pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
            <button type="submit">Submit Pin</button>
          </form>
        </div>
      ) : (
        <div className="document-content">
          <div className="document-image">
            <img src={document.imageUrl} alt={document.title} style={{ width: '100%', height: 'auto' }} />
          </div>
          <button onClick={handleDownload}>Download Document</button>
        </div>
      )}
    </div>
  );
};

export default DocumentViewPage;
