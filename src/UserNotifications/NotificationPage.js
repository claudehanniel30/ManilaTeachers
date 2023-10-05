import React, { Component } from 'react';
import './NotificationPage.css';

class NotificationPage extends Component {
  constructor() {
    super();
    this.state = {
      announcements: [
        { id: 1, title: 'Scholarship 1', description: 'Description for Scholarship 1' },
        { id: 2, title: 'Scholarship 2', description: 'Description for Scholarship 2' },
        // Add more scholarship announcements here
      ],
    };
  }

  render() {
    return (
      <div className="announcements-container">
        <h1 className="announcements-title">Scholarship Announcements</h1>
        <ul className="announcements-list">
          {this.state.announcements.map((announcement) => (
            <li key={announcement.id} className="announcement-item">
              <h3 className="announcement-title">{announcement.title}</h3>
              <p className="announcement-description">{announcement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NotificationPage;
