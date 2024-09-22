import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MessageCircle, Send, X } from 'lucide-react';

const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (userInput.trim() === '') return;
  
    setChatHistory([...chatHistory, { user: userInput, bot: '...' }]);
    setUserInput('');
  
    try {
      console.log('User input:', userInput); // Log user input
      const response = await axios.post('https://backend-chat-umber.vercel.app/chat/', { user_input: userInput });
      
      console.log('API Response:', response); // Log API response
  
      setChatHistory(prev => [
        ...prev.slice(0, -1),
        { user: userInput, bot: response.data.bot_response }
      ]);
    } catch (error) {
      console.error('Error fetching response:', error.response ? error.response.data : error.message);
      setChatHistory(prev => [
        ...prev.slice(0, -1),
        { user: userInput, bot: "Sorry, I couldn't process that request." }
      ]);
    }
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col animate-slide-in">
          <div className="bg-yellow-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="text-lg font-semibold">Chat with Rizki's Bot</h2>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div 
            ref={chatBoxRef}
            className="flex-grow p-4 overflow-y-auto space-y-4"
          >
            {chatHistory.map((chat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-end">
                  <p className="bg-yellow-100 text-yellow-800 p-2 rounded-lg max-w-[80%]">
                    {chat.user}
                  </p>
                </div>
                <div className="flex justify-start">
                  <p className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[80%]">
                    {chat.bot}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Ask me about Rizki..."
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-end">
          <button 
            onClick={toggleChat}
            className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 animate-pulse"
          >
            <MessageCircle size={24} />
          </button>
          <div className="relative">
            <div className="absolute bottom-14 right-0 mb-2 w-32 text-xs font-medium bg-yellow-500 text-white text-center py-1 rounded-lg shadow-lg animate-bounce">
              <p className="text-xs">CHAT WITH BOT ME</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;