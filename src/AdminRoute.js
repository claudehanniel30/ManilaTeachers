import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminMain from "./AdminPage/AdminMain";
import AdminProfilePage from "./AdminProfile/AdminProfilePage";
import ApplicantListPage from "./AdminApplicantList/ApplicantListPage";
import ApplicantRecordsPage from "./AdminApplicantRecords/ApplicantRecordsPage";

function AdminRoute() {
  const getPageName = (pathname) => {
    switch (pathname) {
      case "/AdminPage/AdminProfilePage":
        return "Admin Profile";
      case "/AdminApplicantList/ApplicantListPage":
        return "Applicant List";
      case "/AdminApplicantRecords/ApplicantRecordsPage":
        return "Applicant Records";
      default:
        return "Admin Profile";
    }
  };

  return (
    <Router>
      <div>
        <AdminMain pageName={getPageName(window.location.pathname)} />
        <Routes>
          <Route path="/" element={<AdminProfilePage />} />
          <Route
            path="/AdminPage/AdminProfilePage"
            element={<AdminProfilePage />}
          />
          <Route
            path="/AdminApplicantList/ApplicantListPage"
            element={<ApplicantListPage />}
          />
          <Route
            path="/AdminApplicantRecords/ApplicantRecordsPage"
            element={<ApplicantRecordsPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default AdminRoute;
