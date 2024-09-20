// src/components/SearchPage.js
import React, { useState } from 'react';
import './SearchPage.css'; // Make sure to have your CSS file

const documents = [
  { id: 1, title: 'Document 1', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Income_certificate.jpg' },
  { id: 2, title: 'Document 2', imageUrl: 'https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/11/image-170-1024x683-1.png' },
  { id: 3, title: 'Document 3', imageUrl: 'https://imgv2-2-f.scribdassets.com/img/document/452310013/original/4adcb3a097/1726146275?v=1' },
  { id: 4, title: 'Document 4', imageUrl: 'https://www.pancardapp.com/blog/wp-content/uploads/2019/04/sample-pan-card.jpg' },
  { id: 5, title: 'Document 5', imageUrl: 'https://www.tesz.in/assets/guides/5ea2923ea0f76-img-165.jpg' },
  { id: 6, title: 'Document 6', imageUrl: 'https://th-i.thgim.com/public/news/national/tamil-nadu/ek15l0/article66450521.ece/alternates/LANDSCAPE_1200/New%20voter%20ID%20card%20in%20TN.jpg' },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDocuments, setFilteredDocuments] = useState(documents);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = documents.filter(doc =>
      doc.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDocuments(filtered);
  };

  return (
    <div className="search-page">
      <h1 className="search-header">Search Documents</h1>
      <input
        type="text"
        placeholder="Search documents..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      
      <div className="document-list">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map(doc => (
            <div key={doc.id} className="document-item">
              <h2>{doc.title}</h2>
              <img src={doc.imageUrl} alt={doc.title} className="document-image" />
              <button>Download</button>
            </div>
          ))
        ) : (
          <p>No documents found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
