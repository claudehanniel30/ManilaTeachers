import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "./ApplicantMain.css";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";

const drawerWidth = 280;

function ApplicantMain(props) {
  const location = useLocation(); // Get the current route location
  const { window, children } = props;
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
            text: "Profile",
            link: "./UserProfile/ProfilePage",
            icon: <AccountCircleIcon />,
          },
          {
            text: "Scholarship Status",
            link: "/UserScholarshipStatus/ScholarStatusPage",
            icon: <BookmarkIcon />,
          },
          {
            text: "Submit Requirements",
            link: "/UserSubmitRequirements/SubmitRequirementsPage",
            icon: <DescriptionIcon />,
          },
          {
            text: "Notifications",
            link: "/UserNotifications/NotificationPage",
            icon: <NotificationsIcon />,
          },
          {
            text: "Messages",
            link: "/UserMessages/ChatPage",
            icon: <ChatIcon />,
          },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
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
        {children}
      </Box>
    </Box>
  );
}

ApplicantMain.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
};

export default ApplicantMain;
