import React from 'react';

const Notification = ({ notification, onMarkAsRead }) => {
  // Check if the notification prop is undefined or null
  if (!notification) {
    return null; // Return null to render nothing if the notification is missing
  }

  const { title, message, read } = notification;

  return (
    <div className={`notification ${read ? 'read' : 'unread'}`}>
      <h3>{title}</h3>
      <p>{message}</p>
      {!read && (
        <button onClick={() => onMarkAsRead(notification)}>Mark as Read</button>
      )}
    </div>
  );
};

export default Notification;
