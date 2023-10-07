import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApplicantMain from "./MainPage/ApplicantMain";
import ProfilePage from "./UserProfile/ProfilePage";
import ScholarStatusPage from "./UserScholarshipStatus/ScholarStatusPage";
import SubmitRequirementsPage from "./UserSubmitRequirements/SubmitRequirementsPage";
import NotificationsPage from "./UserNotifications/NotificationPage";
import ChatPage from "./UserMessages/ChatPage";

function App() {
  // Define a function to get the page name based on the route
  const getPageName = (pathname) => {
    switch (pathname) {
      case "/UserProfile/ProfilePage":
        return "Profile";
      case "/UserScholarshipStatus/ScholarStatusPage":
        return "Scholarship Status";
      case "/UserSubmitRequirements/SubmitRequirementsPage":
        return "Submit Requirements";
      case "/UserNotifications/NotificationPage":
        return "Notifications";
      case "/UserMessages/ChatPage":
        return "Messages";
      default:
        return "Profile";
    }
  };

  return (
    <Router>
      <div>
        {/* Pass the pageName prop here */}
        <ApplicantMain pageName={getPageName(window.location.pathname)} />
        <Routes>
          <Route path="/" element={<ProfilePage />} />{" "}
          {/* Set the default route to ProfilePage */}
          <Route path="/UserProfile/ProfilePage" element={<ProfilePage />} />
          <Route
            path="/UserScholarshipStatus/ScholarStatusPage"
            element={<ScholarStatusPage />}
          />
          <Route
            path="/UserSubmitRequirements/SubmitRequirementsPage"
            element={<SubmitRequirementsPage />}
          />
          <Route
            path="/UserNotifications/NotificationPage"
            element={<NotificationsPage />}
          />
          <Route path="/UserMessages/ChatPage" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
