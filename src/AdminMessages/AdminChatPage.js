import React, { useState } from "react";
import "./AdminChatPage.css";

function AdminChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const applicants = [
    { id: 1, name: "Applicant 1" },
    { id: 2, name: "Applicant 2" },
    // Add more applicants as needed
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      text: newMessage,
      sender: "admin",
    };

    if (selectedApplicant) {
      // Add the sender's name to the message
      message.senderName = selectedApplicant.name;
    }

    setMessages([...messages, message]);
    setNewMessage("");
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
        <div className="applicant-list">
          <h2>Applicants</h2>
          <ul>
            {applicants.map((applicant) => (
              <li
                key={applicant.id}
                onClick={() => setSelectedApplicant(applicant)}
                className={
                  selectedApplicant &&
                  selectedApplicant.id === applicant.id
                    ? "selected"
                    : ""
                }
              >
                {applicant.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="message-list">
  {messages.map((message, index) => (
    <div
      key={index}
      className={`message ${
        message.sender === "admin" ? "you" : "admin"
      }`}
    >
      {message.sender === "admin" ? (
        <div className="admin-message">
          <div className="admin-profile-pic">
            <img src="admin-profile-pic-url" alt="Admin" />
          </div>
          <div className="admin-details">
            {/* Remove the "Admin" label */}
            {message.senderName && (
              <div className="admin-name">{message.senderName}</div>
            )}
          </div>
        </div>
      ) : null}
      <div className="message-text">{message.text}</div>
    </div>
  ))}
</div>
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default AdminChatPage;
