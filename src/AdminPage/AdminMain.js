import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "./AdminMain.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import RecordIcon from "@mui/icons-material/RecordVoiceOver";
import ChatIcon from "@mui/icons-material/Chat";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { Link, useLocation } from "react-router-dom"; // Import useLocation


const drawerWidth = 280;

function AdminMain(props) {
  const { window, children } = props; // Accept children elements
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation(); // Moved useLocation to the top level

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getPageName = () => {
    // Extract the page name based on the current route
    switch (location.pathname) {
      case "/AdminApplicantList/ApplicantListPage":
        return "Applicant List";
      case "/AdminApplicantRecords/ApplicantRecordsPage":
        return "Applicant Records";
      case "/AdminMessages/AdminChatPage":
        return "Messages";
      case "/AdminCreateAnnouncement/CreateAnnouncementPage":
        return "Create Announcements";
      default:
        return "Applicant List";
    }
  };

  const drawer = (
    <div>
      <div className="logo-container" style={{ marginTop: "70px" }}>
        <img src="/mtlogo.jpg" alt="" className="logo" />
      </div>
      <Toolbar />
      <Divider />
      <List>
        {[
          {
            text: "Applicant List",
            link: "/AdminApplicantList/ApplicantListPage",
            icon: <ListIcon />
          },
          {
            text: "Applicant Records",
            link: "/AdminApplicantRecords/ApplicantRecordsPage",
            icon: <RecordIcon />
          },
          {
            text: "Messages",
            link: "/AdminMessages/AdminChatPage",
            icon: <ChatIcon />,
          },
          {
            text: "Create Announcements",
            link: "/AdminCreateAnnouncement/CreateAnnouncementPage",
            icon: <AnnouncementIcon />,
          },

        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "absolute",
          bottom: "10px",
          left: "70px",
        }}
      >
        <Button variant="contained" color="primary">
          Logout
        </Button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "green",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {getPageName()} {/* Use the dynamically obtained page name */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          paddingTop: "90px", // Adjust top padding to avoid overlap
          paddingLeft: "16px", // Adjust left padding to avoid overlap
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* Render the page content */}
        {children} {/* Render the children elements */}
      </Box>
    </Box>
  );
}

AdminMain.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node, // Add children prop
};

export default AdminMain;
