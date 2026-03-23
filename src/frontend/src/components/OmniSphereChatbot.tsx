import React from 'react';
import { ChatMessage } from './ChatMessage';

const OmniSphereChatbot = () => {
    return (
        <div className="fixed bottom-0 right-0 p-4 z-50">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                    <h2 className="text-white text-lg font-semibold'>OmniSphere Chatbot</h2>
                </div>
                <div className="flex flex-col p-4 space-y-2">
                    {/* Replace with mapped chat messages */}
                    <ChatMessage message="Hello, how can I assist you today?" isUser={false} />
                    <ChatMessage message="I'd like to know more about your services." isUser={true} />
                </div>
            </div>
        </div>
    );
};

export default OmniSphereChatbot;
