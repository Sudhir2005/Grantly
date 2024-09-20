// src/components/SearchPage.js
import React, { useState } from 'react';
import './SearchPage.css'; // Make sure to have your CSS file

const documents = [
  { id: 1, title: 'Scholarship Application Form', type: 'pdf' },
  { id: 2, title: 'Identity Proof - Aadhar', type: 'jpg' },
  { id: 3, title: 'Income Certificate', type: 'pdf' },
  
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
      <h1>Search Documents</h1>
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
              <p>Type: {doc.type}</p>
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
