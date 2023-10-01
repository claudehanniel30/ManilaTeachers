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
import "./ApplicantMain.css";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Typography from "@mui/material/Typography";

const drawerWidth = 280;

function ApplicantMain(props) {
  const location = useLocation(); // Get the current route location
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getPageName = () => {
    // Extract the page name based on the current route
    switch (location.pathname) {
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

  const renderPageContent = () => {
    // Add your page content based on the selected page
    switch (location.pathname) {
      case "/UserProfile/ProfilePage":
        return <Typography variant="h4">Profile Content Here</Typography>;
      case "/UserScholarshipStatus/ScholarStatusPage":
        return (
          <Typography variant="h4">Scholarship Status Content Here</Typography>
        );
      case "/UserSubmitRequirements/SubmitRequirementsPage":
        return (
          <Typography variant="h4">Submit Requirements Content Here</Typography>
        );
      case "/UserNotifications/NotificationPage":
        return <Typography variant="h4">Notifications Content Here</Typography>;
      case "/UserMessages/ChatPage":
        return <Typography variant="h4">Messages Content Here</Typography>;
      default:
        return <Typography variant="h4">Default Content Here</Typography>;
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
          { text: "Profile", link: "./UserProfile/ProfilePage" },
          {
            text: "Scholarship Status",
            link: "/UserScholarshipStatus/ScholarStatusPage",
          },
          {
            text: "Submit Requirements",
            link: "/UserSubmitRequirements/SubmitRequirementsPage",
          },
          {
            text: "Notifications",
            link: "/UserNotifications/NotificationPage",
          },
          { text: "Messages", link: "/UserMessages/ChatPage" },
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* Your main content here */}
        {renderPageContent()}
      </Box>
    </Box>
  );
}

ApplicantMain.propTypes = {
  window: PropTypes.func,
};

export default ApplicantMain;
