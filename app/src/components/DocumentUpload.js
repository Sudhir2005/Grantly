import React, { useState } from 'react';
import axios from 'axios';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [verificationResult, setVerificationResult] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a document first.');
      return;
    }

    const formData = new FormData();
    formData.append('document', file);

    try {
      const response = await axios.post('http://localhost:5000/verify-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setVerificationResult(response.data.result);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Upload a Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button className="btn btn-primary mt-2" onClick={handleUpload}>
        Verify Document
      </button>
      {verificationResult && <p>Document is {verificationResult}</p>}
    </div>
  );
};

export default DocumentUpload;
