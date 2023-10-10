import React, { useState } from "react";
import "./AdminChatPage.css";

function AdminChatPage() {
  const [newMessage, setNewMessage] = useState("");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const applicants = [
    { id: 1, name: "Claude Hanniel Tarrayo" },
    { id: 2, name: "Al Vincent Guilan" },
    // Add more applicants as needed
  ];

  // State to store messages for the selected applicant
  const [selectedApplicantMessages, setSelectedApplicantMessages] = useState([]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      text: newMessage,
      sender: "admin",
    };

    if (selectedApplicant) {
      // Add the message to the selected applicant's message list
      setSelectedApplicantMessages([...selectedApplicantMessages, message]);
    }

    setNewMessage("");
  };

  const handleApplicantClick = (applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default Enter key behavior (e.g., line break)
      handleSendMessage();
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApplicant(null);
  };

  return (
    <div className="chat-container">
      <div className="content-container">
        <div className="applicant-list-container">
          <div className="applicant-list">
            <h2>Applicants</h2>
            <ul>
              {applicants.map((applicant) => (
                <li
                  key={applicant.id}
                  onClick={() => handleApplicantClick(applicant)}
                  className={
                    selectedApplicant && selectedApplicant.id === applicant.id
                      ? "selected"
                      : ""
                  }
                >
                  {applicant.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Message Modal */}
        {isModalOpen && (
          <div className="message-modal">
            <div className="message-modal-content">
              <button onClick={closeModal} className="close-button">
                X
              </button>
              <h2>{selectedApplicant.name}'s Messages</h2>
              <div className="message-list">
                {selectedApplicantMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${
                      message.sender === "admin" ? "admin-message" : "applicant-message"
                    }`}
                  >
                    {message.text && (
                      <div className="message-text">{message.text}</div>
                    )}
                  </div>
                ))}
              </div>
              {/* Message input for the selected applicant */}
              <div className="message-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress} // Handle Enter key press
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminChatPage;
