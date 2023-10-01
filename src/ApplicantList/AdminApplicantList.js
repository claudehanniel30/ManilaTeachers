import React, { Component } from 'react';
import './AdminApplicantList.css';

class AdminApplicantList extends Component {
  constructor() {
    super();
    // Sample data for scholarship applications (you can replace this with your data source)
    this.state = {
      applications: [
        {
          id: 1,
          fullName: 'John Doe',
          birthDate: '01/15/1990',
          placeOfBirth: 'New York',
          homeAddress: '123 Main St',
          city: 'New York',
          zipCode: '10001',
          phoneNumber: '555-123-4567',
          school: 'Sample University',
          course: 'Computer Science',
          gwa: '3.8',
        },
        // Add more application data as needed
      ],
    };
  }

  // Implement action handlers for ASSESS, APPROVE, REJECT, and EDIT here

  render() {
    return (
      <div>
        <h1>Scholarship Applications</h1>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Birth Date</th>
              <th>Place of Birth</th>
              <th>Home Address</th>
              <th>City</th>
              <th>Postal/ZIP Code</th>
              <th>Phone Number</th>
              <th>School</th>
              <th>Course</th>
              <th>GWA</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through your scholarship applications data and render each row */}
            {this.state.applications.map(application => (
              <tr key={application.id}>
                <td>{application.fullName}</td>
                <td>{application.birthDate}</td>
                <td>{application.placeOfBirth}</td>
                <td>{application.homeAddress}</td>
                <td>{application.city}</td>
                <td>{application.zipCode}</td>
                <td>{application.phoneNumber}</td>
                <td>{application.school}</td>
                <td>{application.course}</td>
                <td>{application.gwa}</td>
                <td>
                  <button onClick={() => this.handleAssess(application)}>ASSESS</button>
                  <button onClick={() => this.handleApprove(application)}>APPROVE</button>
                  <button onClick={() => this.handleReject(application)}>REJECT</button>
                  <button onClick={() => this.handleEdit(application)}>EDIT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminApplicantList;
