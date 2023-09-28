import React, { Component } from "react";
import "./Login.css"; // Import the CSS file

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    // Add authentication logic here (e.g., check credentials, make an API call, etc.)
    console.log(`Username: ${username}, Password: ${password}`);
  };

  render() {
    return (
      <div className="container">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Don't have an account? <a href="/signup" style={{ color: "green" }}>Sign-up</a>
            <br />
            <a href="/forgotpassword" style={{ color: "green" }}>Forgot Password?</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
