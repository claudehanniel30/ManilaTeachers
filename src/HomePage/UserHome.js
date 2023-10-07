import React, { useState } from "react";
import Modal from "react-modal";
import "./UserHome.css"; // You can define your own CSS styles

Modal.setAppElement("#root"); // Set the root element for the modal

function UserHome() {
  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const openSignInModal = () => {
    setSignInModalIsOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalIsOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalIsOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalIsOpen(false);
  };

  const handleSignIn = () => {
    // Handle sign-in logic here
    // You can access the email and password values from the state (email and password)
    // You can perform validation and send a request to your server for authentication
    // For this example, we'll simply close the modal
    closeSignInModal();
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    // You can validate the inputs, compare the password and confirm password, and proceed with registration
    closeSignUpModal();
  };

  return (
    <div className="user-home">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/mtlogo.jpg" alt="Logo" className="logo" />
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
        <div className="nav-buttons">
          <button onClick={openSignInModal} className="sign-in-button">
            Sign In
          </button>
          <button onClick={openSignUpModal} className="sign-up-button">
            Sign Up
          </button>
        </div>
      </nav>
      <img src="/mtbg.jpg" alt="Background" className="background-image" />
      <div className="content-inside-image">
        <h2>Find scholarships<br />
        and achieve your goals.</h2>
        <p>Get financial did to cater for your studies.<br />
        We provide a collection of scholarships application that suit your needs.
        </p>
        
        <button className="btn">Get Started</button>
      </div>
      <img src="/mtbg1.jpg" alt="Background" className="background-image1" />

      <div className="content-section">
        <div className="line">
          <p>Get scholarships and achieve your education goals</p>
        </div>
        <h1>Achieve your Dreams</h1>
        <p>
          Access scholarships that match <br />
          your education financial needs <br />
          and achieve your goals.
        </p>

        <button className="btn">Get Started</button>
        
        <p>
          Find Us:{" "}
          <a href="https://www.facebook.com/sirmoi.mtbatangas">Facebook</a>
        </p>
      </div>

      <Modal
        isOpen={signInModalIsOpen}
        onRequestClose={closeSignInModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeSignInModal} className="exit-button">
          x
        </button>
        <h2>Sign In to Your Account</h2>
        <div className="form">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <button onClick={handleSignIn} className="form-button">
            Sign In
          </button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </Modal>

      {/* Sign Up Modal */}
      <Modal
        isOpen={signUpModalIsOpen}
        onRequestClose={closeSignUpModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeSignUpModal} className="exit-button">
          x
        </button>
        <h2>Sign Up for an Account</h2>
        <div className="form">
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
          </div>
          <div className="form-group1">
            <div className="form-group1">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
          </div>
          <button onClick={handleSignUp} className="form-button">
            Sign Up
          </button>
          <p>
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </div>
      </Modal>

      {/* The rest of your homepage content */}
    </div>
  );
}

export default UserHome;
