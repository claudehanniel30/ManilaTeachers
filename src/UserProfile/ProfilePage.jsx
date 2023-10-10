import React, { useState } from "react";
import "./ProfilePage.css"; // Import your CSS file for styling

const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false); // Add state to toggle edit mode

  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    birthDate: "01/01/1990",
    placeOfBirth: "City, Country",
    age: 33,
    profilePicture: "profile-pic-url.jpg",
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="profile-container">
      <div className="header-container">
        <div className="profile-header">
          <img src={user.profilePicture} alt="User" className="profile-picture" />
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p>@{user.username}</p>
          </div>
        </div>
        <button className="edit-button" onClick={toggleEditMode}>
          {isEditMode ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div className="profile-details">
        <h2>Profile Information</h2>
        <div className="info-group">
          <label>Name:</label>
          {isEditMode ? (
            <input type="text" name="name" defaultValue={user.name} />
          ) : (
            <p>{user.name}</p>
          )}
        </div>
        <div className="info-group">
          <label>Username:</label>
          {isEditMode ? (
            <input type="text" name="username" defaultValue={user.username} />
          ) : (
            <p>{user.username}</p>
          )}
        </div>
        <div className="info-group">
          <label>Email:</label>
          {isEditMode ? (
            <input type="email" name="email" defaultValue={user.email} />
          ) : (
            <p>{user.email}</p>
          )}
        </div>
        <div className="info-group">
          <label>Phone Number:</label>
          {isEditMode ? (
            <input
              type="tel"
              name="phoneNumber"
              defaultValue={user.phoneNumber}
            />
          ) : (
            <p>{user.phoneNumber}</p>
          )}
        </div>
        <div className="info-group">
          <label>Birth Date:</label>
          {isEditMode ? (
            <input type="text" name="birthDate" defaultValue={user.birthDate} />
          ) : (
            <p>{user.birthDate}</p>
          )}
        </div>
        <div className="info-group">
          <label>Place of Birth:</label>
          {isEditMode ? (
            <input
              type="text"
              name="placeOfBirth"
              defaultValue={user.placeOfBirth}
            />
          ) : (
            <p>{user.placeOfBirth}</p>
          )}
        </div>
        <div className="info-group">
          <label>Age:</label>
          {isEditMode ? (
            <input type="number" name="age" defaultValue={user.age} />
          ) : (
            <p>{user.age}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
