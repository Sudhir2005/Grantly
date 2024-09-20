// src/components/DocumentViewPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DocumentViewPage = () => {
  const { docId } = useParams(); // Get the document ID from the URL
  const navigate = useNavigate();

  // Placeholder for fetching the document details
  const document = {
    id: docId,
    title: "Sample Document",
    imageUrl: "path_to_your_image.jpg", // Replace with actual image path
  };

  const handleDownload = () => {
    const link = document.imageUrl; // Update this with the actual document URL
    const a = document.createElement('a');
    a.href = link;
    a.download = document.title; // Name of the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="document-view">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{document.title}</h1>
      <div className="document-image">
        <img src={document.imageUrl} alt={document.title} />
      </div>
      <button onClick={handleDownload}>Download Document</button>
    </div>
  );
};

export default DocumentViewPage;
