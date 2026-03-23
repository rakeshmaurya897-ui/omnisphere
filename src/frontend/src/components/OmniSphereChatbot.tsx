import React, { useEffect, useState } from 'react';
import { useChat } from 'react-use-chat';
import './OmniSphereChatbot.css';

const OmniSphereChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { sendMessage, receiveMessage, error } = useChat();

  useEffect(() => {
    // Handle incoming messages
    const handleReceive = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    receiveMessage(handleReceive);
  }, [receiveMessage]);

  const handleSend = async (text) => {
    setLoading(true);
    try {
      const response = await sendMessage(text);
      setMessages((prev) => [...prev, { text, sender: 'user' }, response]);
    } catch (err) {
      setMessages((prev) => [...prev, { text: 'Error: ' + err.message, sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="gradient-header">
        <h1>OmniSphere Chatbot</h1>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message-bubble ${msg.sender}`}> 
            {msg.text}
            <span className="timestamp">{new Date().toLocaleTimeString()}</span>
          </div>
        ))}
        {loading && <div className="loading-animation">Loading...</div>}
      </div>
      <div className="input-area">
        <input type="text" onKeyPress={(e) => e.key === 'Enter' && handleSend(e.target.value)} />
      </div>
    </div>
  );
};

export default OmniSphereChatbot;