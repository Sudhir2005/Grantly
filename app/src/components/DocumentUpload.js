import React, { useState } from 'react';
import axios from 'axios';

const DocumentUpload = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/documents/upload', {
        title,
        imageUrl,
      });
      console.log('Document uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="text"
        placeholder="Document Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <button type="submit">Upload Document</button>
    </form>
  );
};

export default DocumentUpload;
