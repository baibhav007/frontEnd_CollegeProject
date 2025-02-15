import React, { useState, useEffect } from "react";
import chatbotimg from "../assets/Image/chatbot.png";
import Chatbox from "./Chatbox";

function Chatbot() {
  const [showMessage, setShowMessage] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Show "Hello 👋🏻" after 6 seconds if chat is not open
    if (!showChat) {
      const showTimer = setTimeout(() => {
        setShowMessage(true);
        const hideTimer = setTimeout(() => {
          setShowMessage(false);
        }, 6000); // Hide after 6 seconds
        return () => clearTimeout(hideTimer);
      }, 6000);

      return () => clearTimeout(showTimer);
    }
  }, [showChat]); // Effect depends on showChat state

  return (
    <div className="flex fixed bottom-4 right-6 z-50 items-center gap-4">
      {showMessage &&
        !showChat && ( // Only show message if chat is not open
          <div className="chatbot-wrapper text-white bg-blue-500 transition-colors px-3 py-1 rounded-xl">
            Hello 👋🏻
          </div>
        )}
      <img
        src={chatbotimg}
        className="h-10 sm:h-15 md:h20 cursor-pointer"
        alt="Chatbot"
        onClick={() => {
          setShowMessage(false); // Hide message when chatbot is clicked
          setShowChat(true); // Open chat
        }}
      />
      {showChat && <Chatbox onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default Chatbot;
