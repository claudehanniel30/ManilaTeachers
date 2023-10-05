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
          imageURL: 'https://example.com/sample-image.jpg',
          fullName: "John Doe",
          homeAddress: "123 Main St",
          email: "john.doe@example.com",
          requirements: "Transcript, Essay",
          dateTimeSubmitted: "10/01/2023 14:30",
        },
        // Add more application data as needed
      ],
      currentPage: 1,
      itemsPerPage: 5, // Number of items to display per page
      searchQuery: "",
    };
  }

  // Implement action handlers for ASSESS, APPROVE, REJECT, and EDIT here

  // Function to handle search input
  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { applications, currentPage, itemsPerPage, searchQuery } = this.state;

    // Filter applications based on search query
    const filteredApplications = applications.filter((application) =>
      application.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate the index of the first and last item to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredApplications.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div>
        <h1>Scholarship Applications</h1>
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
            {currentItems.map((application) => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.fullName}</td>
                <td>{application.homeAddress}</td>
                <td>{application.email}</td>
                <td>{application.requirements}</td>
                <td>{application.dateTimeSubmitted}</td>
                <td>
                  {/* Implement your action buttons here */}
                  <button
                    className="assess"
                    onClick={() => this.handleAssess(application)}
                  >
                    ASSESS
                  </button>
                  <button
                    className="approve"
                    onClick={() => this.handleApprove(application)}
                  >
                    APPROVE
                  </button>
                  <button
                    className="reject"
                    onClick={() => this.handleReject(application)}
                  >
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
