import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { Link, useNavigate } from 'react-router-dom'; // For navigation to home page
import './DocumentAddPage.css';

const AddDocumentPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState('');
  const [file, setFile] = useState(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressedFile, setCompressedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false); // For success screen
  const [nextStepEnabled, setNextStepEnabled] = useState(false);

  const navigate = useNavigate(); // Use for navigation to home page

  const certificates = [
    'Birth Certificate',
    'Domicile Certificate',
    'Income Certificate',
    'Caste Certificate',
    'Disability Certificate',
  ];

  const handleFileChange = async (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    if (uploadedFile.size > 2000000) { // If file is larger than 2MB, compress it
      setIsCompressing(true);
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      try {
        const compressed = await imageCompression(uploadedFile, options);
        setCompressedFile(compressed);
      } catch (error) {
        console.error('Error compressing file:', error);
      }
      setIsCompressing(false);
    } else {
      setCompressedFile(uploadedFile);
    }
  };

  const analyzeDocument = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const isFake = Math.random() > 0.5; // Simulate anomaly detection
      setIsAnalyzing(false);
      if (!isFake) {
        alert("Document is Real.");
        setNextStepEnabled(true);
      } else {
        alert("Anomaly Detected: Fake Document!");
        setNextStepEnabled(false);
      }
    }, 2000);
  };

  const handleUpload = () => {
    analyzeDocument();
    setIsConfirmed(true);
  };

  const handleNextStep = () => {
    setUploadSuccess(true); // Show success screen
  };

  const handleBackToHome = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="add-document-page">
      {!uploadSuccess ? (
        <>
          <h2>Add Your Documents</h2>
          <div className="form-group">
            <label htmlFor="certificate-select">Select Certificate Type</label>
            <select
              id="certificate-select"
              value={selectedCertificate}
              onChange={(e) => setSelectedCertificate(e.target.value)}
            >
              <option value="">-- Select a Certificate --</option>
              {certificates.map((cert, index) => (
                <option key={index} value={cert}>
                  {cert}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="file-upload">Upload Your Document</label>
            <input
              type="file"
              id="file-upload"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
            />
            {isCompressing && <p>Compressing file, please wait...</p>}
          </div>

          <div className="form-group">
            {compressedFile && (
              <div>
                <p>Document processed successfully!</p>
                <button onClick={handleUpload}>Analyze and Upload</button>
              </div>
            )}
            {isAnalyzing && <p>Analyzing the document...</p>}
          </div>

          {isConfirmed && (
            <div className="confirmation-popup">
              <p>Confirm upload of {selectedCertificate}?</p>
              {nextStepEnabled && (
                <button onClick={handleNextStep}>Proceed to Next Step</button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="success-screen">
          <button className="back-button" onClick={handleBackToHome}>
            Back to Home
          </button>
          <h2>Document Uploaded Successfully!</h2>
          <img src="success-image-url" alt="Success" className="success-image" />
        </div>
      )}
    </div>
  );
};

export default AddDocumentPage;
