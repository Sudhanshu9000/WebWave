import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, user: "user" };
      setMessages([...messages, userMessage]);
      setInput("");
      generateBotResponse(userMessage.text);
    }
  };

  const generateBotResponse = (userInput) => {
    let botResponse = "I'm not sure how to respond to that.";

    if (userInput.toLowerCase().includes('hello')) {
      botResponse = 'Hello! How can I assist you today?';
    } else if (userInput.toLowerCase().includes('help')) {
      botResponse = 'Sure, I am here to help! What do you need assistance with?';
    } else if (userInput.toLowerCase().includes('bye')) {
      botResponse = 'Goodbye! Have a great day!';
    }

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, user: "bot" }]);
    }, 1000);
  };

  const toggleChatbot = () => {
    if (!isOpen) {
      // Add an initial bot message when opening the chatbot
      setMessages([{ text: 'Welcome! How can I help you today?', user: 'bot' }]);
    } else {
      // Clear messages when closing the chatbot
      setMessages([]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div 
          className="fixed bottom-20 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer border-4 border-white"
        onClick={toggleChatbot}
      >
        <i className="fas fa-comments fa-2x"></i>
      </div>

      {isOpen && (
        <div className="fixed bottom-32 right-4 flex flex-col w-80 h-96 border border-gray-300 rounded-lg shadow-lg bg-white">
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div
                     key= {index}
                     className={`mb-2 p-2 rounded-lg ${
                        msg.user === 'user' ? 'bg-blue-100 self-end': 'bg-green-100 self-start'
                     }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex border-t border-gray-300">
                <input
                     type="text"
                     className="flex-1 p-2 border-none focus:outline-none"
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                     placeholder="Write Message"
                />
                <button
                   className="p-2 bg-blue-500 text-white hover:bg-blue-600"
                   onClick={handleSend}
                >
                    Send
                </button>
            </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;