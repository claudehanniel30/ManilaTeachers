import React, { Component } from "react";
import "./SubmitRequirementsPage.css";

class SubmitRequirementsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      birthDate: "",
      placeOfBirth: "",
      homeAddress: "",
      streetAddress: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
      school: "",
      course: "",
      gwa: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
    console.log("Form data submitted:", this.state);
  };

  render() {
    return (
      <div className="educational-assistance-container">
        <h1>
          Educational Assistance Application Form <br />
          <small>Fill up this form</small>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-column">
            <div className="form-group">
              <label>Full Name*:</label>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name*"
                  value={this.state.middleName}
                  onChange={this.handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Birth Date*:</label>
              <input
                type="date"
                name="birthDate"
                value={this.state.birthDate}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Place of Birth*:</label>
              <input
                type="text"
                name="placeOfBirth"
                value={this.state.placeOfBirth}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Home Address*:</label>
              <input
                type="text"
                name="homeAddress"
                value={this.state.homeAddress}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Street Address*:</label>
              <input
                type="text"
                name="streetAddress"
                value={this.state.streetAddress}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>City*:</label>
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Portal/ZIP Code*:</label>
              <input
                type="text"
                name="postalCode"
                value={this.state.postalCode}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number*:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>School*:</label>
              <input
                type="text"
                name="school"
                value={this.state.school}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Course*:</label>
              <input
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>GWA*:</label>
              <input
                type="text"
                name="gwa"
                value={this.state.gwa}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
        </form>
        <div className="upload-section">
          <h2>Upload Needed Files</h2>
          <div className="file-upload">
            <label>Upload Valid ID (PDF, DOC, DOCX)*:</label>
            <input type="file" accept=".pdf, .doc, .docx" />
          </div>
          <div className="file-upload">
            <label>
              Upload COR (Certificate of Registration - PDF, DOC, DOCX)*:
            </label>
            <input type="file" accept=".pdf, .doc, .docx" />
          </div>
          <div className="file-upload">
            <label>Upload School ID (JPG, JPEG, PNG)*:</label>
            <input type="file" accept=".jpg, .jpeg, .png" />
          </div>
          <div className="file-upload">
            <label>Upload Indigency (PDF, DOC, DOCX)*:</label>
            <input type="file" accept=".pdf, .doc, .docx" />
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    );
  }
}

export default SubmitRequirementsPage;
