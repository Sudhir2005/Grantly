import React, { useState } from 'react';
import './ChatbotPage.css';
import { Link } from 'react-router-dom';

// Function to fetch AI response from OpenAI API
const getAIResponse = async (userInput) => {
  try {
    const response = await fetch('cd88c04c7f034807a674072f638d00ef', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer cd88c04c7f034807a674072f638d00ef` // Securely use API key
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // Replace with the model you are using
        prompt: userInput,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    return data.choices[0].text.trim(); // Return the generated response
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return "Sorry, I couldn't process your request at the moment.";
  }
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, type: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);

      // Get bot response from the AI API
      const botResponse = await getAIResponse(input); // Call the AI response function
      const botMessage = { text: botResponse, type: 'bot' };

      setMessages(prevMessages => [...prevMessages, botMessage]);
      setInput(''); // Clear input field after sending the message
    }
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <Link to="/home" className="back-button">←</Link>
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
          onKeyPress={(e) => e.key === 'Enter' && handleSend()} // Send message on 'Enter' key
        />
        <button onClick={handleSend}>Send</button>
      </footer>
    </div>
  );
};

export default Chatbot;
