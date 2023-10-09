import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminMain from "./AdminPage/AdminMain";
import ApplicantListPage from "./AdminApplicantList/ApplicantListPage";
import ApplicantRecordsPage from "./AdminApplicantRecords/ApplicantRecordsPage";
import CreateAnnouncementPage from "./AdminCreateAnnouncement/CreateAnnouncementPage";
import AdminChatPage from "./AdminMessages/AdminChatPage";

function AdminRoute() {
  const getPageName = (pathname) => {
    switch (pathname) {
      
      case "/AdminApplicantList/ApplicantListPage":
        return "Applicant List";
      case "/AdminApplicantRecords/ApplicantRecordsPage":
        return "Applicant Records";
      case "/AdminMessages/AdminChatPage":
        return "Messages";
      case "/AdminCreateAnnouncement/CreateAnnouncementPage":
        return "Create Announcements";
      default:
        return "Admin Profile";
    }
  };

  return (
    <Router>
      <div>
        <AdminMain pageName={getPageName(window.location.pathname)}>
          {/* Include the content components as children */}
          <Routes>
            <Route path="/" element={<ApplicantListPage />} />
            {/* Set the default route to ApplicantListPage */}
            <Route
              path="/AdminApplicantList/ApplicantListPage"
              element={<ApplicantListPage />}
            />
            <Route
              path="/AdminApplicantRecords/ApplicantRecordsPage"
              element={<ApplicantRecordsPage />}
            />
            <Route
              path="/AdminCreateAnnouncement/CreateAnnouncementPage"
              element={<CreateAnnouncementPage />}
            />
            <Route
              path="/AdminMessages/AdminChatPage"
              element={<AdminChatPage />}
            />
          </Routes>
        </AdminMain>
      </div>
    </Router>
  );
}
export default AdminRoute;