import React, { useState } from 'react';
import './ChatbotPage.css';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'user' }]);
      // Simulate a bot response after a delay
      setTimeout(() => {
        setMessages([...messages, { text: input, type: 'user' }, { text: 'I’m here to help! How can I assist you today?', type: 'bot' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <Link to="/home" className="back-button">← Back to Home</Link>
        <h1>Ask Questions</h1>
      </header>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <footer className="chatbot-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </footer>
    </div>
  );
};

export default Chatbot;
