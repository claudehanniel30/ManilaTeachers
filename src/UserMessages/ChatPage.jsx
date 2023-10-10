import React, { useState } from "react";
import "./ChatPage.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSendMessage = () => {
    if (currentMessage.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: currentMessage,
      sender: "You", // Replace with actual sender info
      date: new Date().toLocaleDateString(), // Add date
      time: new Date().toLocaleTimeString(), // Add time
    };

    setMessages([...messages, newMessage]);
    setCurrentMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="header-title">
          <h1>Messaging App</h1>
          <p>Online</p>
        </div>
        <div className="header-actions">
          {/* Add header actions like a search bar or settings */}
        </div>
      </div>

      <div className="chat-messages">
        <div className="message-list">
          {messages.map((message) => (
            <div
              className={`message ${
                selectedMessage === message.id ? "selected" : ""
              }`}
              key={message.id}
              onClick={() => setSelectedMessage(message.id)}
            >
              {message.sender !== "You" && (
                <div className="admin-message">
                  <div className="admin-profile-pic">
                    <img
                      src="admin-profile-pic-url" // Replace with actual URL
                      alt="Admin"
                    />
                  </div>
                  <div className="admin-details">
                    <div className="admin-name">Admin</div>
                  </div>
                </div>
              )}
              <div
                className={`message-text ${
                  message.sender === "You" ? "you" : "admin"
                }`}
              >
                {message.text}
              </div>
              <div className="message-metadata">
                {message.date} at {message.time}
              </div>
            </div>
          ))}
        </div>

        {selectedMessage !== null && (
          <div className="message-box">
            <div className="admin-profile-pic">
              <img
                src="admin-profile-pic-url" // Replace with actual URL
                alt="Admin"
              />
            </div>
            <div className="admin-details">
              <div className="admin-name">Admin</div>
            </div>
            <div className="message-text">
              {messages.find((message) => message.id === selectedMessage).text}
            </div>
            <div className="message-metadata">
              {messages.find((message) => message.id === selectedMessage).date} at {messages.find((message) => message.id === selectedMessage).time}
            </div>
          </div>
        )}
      </div>

      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;