import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import ApplicantMain from "./MainPage/ApplicantMain";
import ProfilePage from "./UserProfile/ProfilePage";
import ScholarStatusPage from "./UserScholarshipStatus/ScholarStatusPage";
import SubmitRequirementsPage from "./UserSubmitRequirements/SubmitRequirementsPage";
import NotificationsPage from "./UserNotifications/NotificationPage";
import ChatPage from "./UserMessages/ChatPage";

function App() {
  return (
    <Router>
      <div>
        <ApplicantMain />
        <Routes>
          {/* Define a route for the ProfilePage component */}
          <Route path="/UserProfile/ProfilePage" element={<ProfilePage />} />
          <Route path="/UserScholarStatus/ScholarStatusPage " element={<ScholarStatusPage />} />
          <Route path="/UserSubmitRequirements/SubmitRequirementsPage" element={<SubmitRequirementsPage />} />
          <Route path="/UserNotifications/NotificationPage" element={<NotificationsPage />} />
          <Route path="/UserMessages/ChatPage" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
