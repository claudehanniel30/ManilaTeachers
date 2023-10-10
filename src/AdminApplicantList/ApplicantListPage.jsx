import React, { Component } from "react";
import "./ApplicantListPage.css";

class ApplicantListPage extends Component {
  constructor() {
    super();
    // Sample data for scholarship applications (you can replace this with your data source)
    this.state = {
      applications: [
        {
          id: "APP001",
          imageURL: "https://example.com/sample-image.jpg",
          fullName: "John Doe",
          homeAddress: "123 Main St",
          email: "john.doe@example.com",
          requirements: "Transcript, Essay",
          dateTimeSubmitted: "10/01/2023 14:30",
          requirementsComplete: true, // Add this property for requirements completion
        },
        // Add more application data as needed
        {
          id: "APP001",
          imageURL: "https://example.com/sample-image.jpg",
          fullName: "John Doe",
          homeAddress: "123 Main St",
          email: "john.doe@example.com",
          requirements: "Transcript, Essay",
          dateTimeSubmitted: "10/01/2023 14:30",
          requirementsComplete: true, // Add this property for requirements completion
        },
        {
          id: "APP001",
          imageURL: "https://example.com/sample-image.jpg",
          fullName: "John Doe",
          homeAddress: "123 Main St",
          email: "john.doe@example.com",
          requirements: "Transcript, Essay",
          dateTimeSubmitted: "10/01/2023 14:30",
          requirementsComplete: true, // Add this property for requirements completion
        },
        {
          id: "APP001",
          imageURL: "https://example.com/sample-image.jpg",
          fullName: "John Doe",
          homeAddress: "123 Main St",
          email: "john.doe@example.com",
          requirements: "Transcript, Essay",
          dateTimeSubmitted: "10/01/2023 14:30",
          requirementsComplete: true, // Add this property for requirements completion
        },
        
      ],
      currentPage: 1,
      itemsPerPage: 5, // Number of items to display per page
      searchQuery: "",
    };
  }

  // Function to handle search input
  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { searchQuery } = this.state;

    // Calculate the total number of applicants who have submitted forms
    const totalApplicants = this.state.applications.length;

    return (
      <div>
        <h1>Scholarship Applications</h1>
        <div className="total-applicants">
          Total Applicants: {totalApplicants}
        </div>
        <div className="search-bar">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={this.handleSearchChange}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Applicant FullName</th>
              <th>Home Address</th>
              <th>Email</th>
              <th>Requirements</th>
              <th>Date & Time Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through your scholarship applications data and render each row */}
            {this.state.applications.map((application) => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.fullName}</td>
                <td>{application.homeAddress}</td>
                <td>{application.email}</td>
                <td>
                  {/* Conditionally render the requirements text in green */}
                  {application.requirementsComplete ? (
                    <span style={{ color: "green" }}>Complete</span>
                  ) : (
                    <span style={{ color: "red" }}>Not Complete</span>
                  )}
                </td>
                <td>{application.dateTimeSubmitted}</td>
                <td>
                  {/* Implement your action buttons here */}
                  <button className="assess" onClick={() => this.handleAssess(application)}>
                    ASSESS
                  </button>
                  <button className="approve" onClick={() => this.handleApprove(application)}>
                    APPROVE
                  </button>
                  <button className="reject" onClick={() => this.handleReject(application)}>
                    REJECT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ApplicantListPage;
  