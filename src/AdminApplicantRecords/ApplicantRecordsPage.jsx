import React from "react";
import "./ApplicantRecordsPage.css"; // Import your CSS file

function ApplicantRecordsPage() {
    // Sample data
    const applicantData = [
        {
            applicationId: "APP001",
            fullName: "John Doe",
            homeAddress: "123 Main St",
            email: "john@example.com",
            phoneNumber: "555-555-5555",
            status: "Approved",
        },
        {
            applicationId: "APP002",
            fullName: "Jane Smith",
            homeAddress: "456 Elm St",
            email: "jane@example.com",
            phoneNumber: "555-555-5556",
            status: "Approved",
        },
        // Add more applicant data as needed
    ];

    return (
        <div>
            <h1>Applicant Records</h1>
            <table className="applicant-table">
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Applicant FullName</th>
                        <th>Home Address</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {applicantData.map((applicant) => (
                        <tr key={applicant.applicationId}>
                            <td>{applicant.applicationId}</td>
                            <td>{applicant.fullName}</td>
                            <td>{applicant.homeAddress}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.phoneNumber}</td>
                            <td>
                                <span className="status-button">{applicant.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ApplicantRecordsPage;
