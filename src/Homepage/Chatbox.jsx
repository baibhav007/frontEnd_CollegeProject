import React, { useState } from "react";

function Chatbox({ onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! How can I assist you today?" },
    { id: 2, sender: "user", text: "What are the exam updates?" },
    { id: 3, sender: "bot", text: "CCSU: New Exam Schedule after 21 March." },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: "user", text: inputMessage },
    ]);
    setInputMessage("");
  };

  return (
    <div className="fixed bottom-16 right-5 sm:right-10 z-50">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-[480px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Chatbox</h1>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 right-4 cursor-pointer h-6 w-6 text-white"
            onClick={onClose}
            tabIndex={0}
            role="button"
            aria-label="Close chatbox"
          >
            <path
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.68342 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                } p-3 rounded-lg shadow-md max-w-[75%]`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="px-4 py-3 border-t border-gray-300 flex items-center bg-white">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button
            onClick={handleSendMessage}
            className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
