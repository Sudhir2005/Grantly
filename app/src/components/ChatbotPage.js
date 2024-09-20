import React, { useState } from 'react';
import './ChatbotPage.css';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const getResponse = (userInput) => {
    // Simple keyword-based responses
    const responses = {
      "scholarship": "There are various scholarships available based on your eligibility. Please provide your details for more information.",
      "application": "You can apply for scholarships through our website. Make sure to submit all required documents.",
      "documents": "You need to upload specific documents like your ID, income certificate, and other supporting papers.",
      "help": "I'm here to assist you! What do you need help with?",
      "default": "I'm not sure how to help with that. Could you ask something else?"
    };

    // Check if the userInput contains a keyword and respond accordingly
    for (let key in responses) {
      if (userInput.toLowerCase().includes(key)) {
        return responses[key];
      }
    }
    return responses.default;
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, type: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);

      // Get bot response after a delay
      setTimeout(() => {
        const botMessage = { text: getResponse(input), type: 'bot' };
        setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
      }, 1000);

      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <Link to="/home" className="back-button">← </Link>
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
