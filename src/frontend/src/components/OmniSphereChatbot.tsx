import React from 'react';
import { useState } from 'react';

const OmniSphereChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input) {
            setMessages([...messages, { text: input, fromUser: true }]);
            setInput('');
            // Simulate bot response
            setTimeout(() => {
                setMessages(preMessages => [...preMessages, { text: 'This is a bot response!', fromUser: false }]);
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col h-screen p-4 bg-gradient-to-br from-green-400 to-blue-500">
            <header className="text-2xl font-bold text-white text-center py-4 rounded shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg">
                OmniSphere Chatbot
            </header>
            <div className="flex-1 overflow-auto mt-4 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-md shadow-lg p-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`my-2 p-2 rounded-xl ${msg.fromUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} transition-all duration-300 ease-in-out transform ${msg.fromUser ? 'animate-bounce' : ''}`}> 
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center mt-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-3 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSend}
                    className="ml-2 p-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default OmniSphereChatbot;