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
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const drawerWidth = 280;

function AdminMain(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation(); // Moved useLocation to the top level

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Define the renderPageContent function
  const renderPageContent = () => {
    switch (location.pathname) {
      case "/AdminProfile/AdminProfilePage":
        return <Typography variant="h4"></Typography>;
      case "/AdminApplicantList/ApplicantListPage":
        return <Typography variant="h4"></Typography>;
      case "/AdminApplicantRecords/ApplicantRecordsPage":
        return <Typography variant="h4"></Typography>;
      default:
        return <Typography variant="h4"></Typography>;
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
          { text: "Admin Profile", 
          link: "/AdminProfile/AdminProfilePage" },
          {
            text: "Applicant List",
            link: "/AdminApplicantList/ApplicantListPage",
          },
          {
            text: "Applicant Records",
            link: "/AdminApplicantRecords/ApplicantRecordsPage",
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
            Admin Page
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
        {/* Render the page content */}
        {renderPageContent()}
      </Box>
    </Box>
  );
}

AdminMain.propTypes = {
  window: PropTypes.func,
};

export default AdminMain;
