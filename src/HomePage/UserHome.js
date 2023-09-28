import React from "react";
import "./UserHome.css"; // Import your CSS file for styling

function UserHome() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="your-logo-image-url.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
      <div className="sign-in">
        <button className="green-button">Sign In</button>
      </div>
    </nav>
  );
}

export default UserHome;
