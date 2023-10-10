import React, { useState } from "react";
import {
  Typography,
  Input,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  Paper,
  InputAdornment,
} from "@mui/material";
import "./CreateAnnouncementPage.css";

function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState("");
  const [editedAnnouncementId, setEditedAnnouncementId] = useState(null);
  const [commonTitle, setCommonTitle] = useState(""); // Add common title state

  // Define the maximum input length
  const maxInputLength = 3000;

  const handleAddAnnouncement = (e) => {
    e.preventDefault();

    const newAnnouncement = {
      id: Date.now(),
      title: commonTitle, // Use the common title
      text: announcementText,
      date: new Date().toLocaleDateString(),
    };

    setAnnouncements([...announcements, newAnnouncement]);
    setAnnouncementText("");
    setCommonTitle(""); // Clear the title input after adding an announcement
  };

  const handleEdit = (id) => {
    setEditedAnnouncementId(id);
  };

  const handleSave = () => {
    setEditedAnnouncementId(null);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "16px", marginTop: "24px" }}>
        <Typography variant="h4" gutterBottom>
          Announcements
        </Typography>

        {/* Input for the common title */}
        <Input
          fullWidth
          placeholder="Enter Title" // Set the placeholder text
          value={commonTitle}
          onChange={(e) => setCommonTitle(e.target.value)}
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
            marginBottom: "16px", // Add margin bottom
          }}
        />

        <form onSubmit={handleAddAnnouncement}>
          <Input
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Enter your announcement"
            value={announcementText}
            onChange={(e) => {
              // Limit input length to maxInputLength characters
              if (e.target.value.length <= maxInputLength) {
                setAnnouncementText(e.target.value);
              }
            }}
            required
            inputProps={{
              maxLength: maxInputLength,
            }}
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
            }}
            endAdornment={
              <InputAdornment position="end">
                <Typography variant="caption" color="textSecondary">
                  {announcementText.length}/{maxInputLength}
                </Typography>
              </InputAdornment>
            }
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              marginTop: "16px",
              marginLeft: "auto",
              display: "block",
            }}
          >
            Add Announcement
          </Button>
        </form>

        {announcements.length === 0 ? (
          <Typography variant="body1" style={{ marginTop: "16px" }}>
            No announcements yet. Start by creating one!
          </Typography>
        ) : (
          <div>
            <Typography variant="h5" style={{ marginTop: "16px" }}>
              Announcements:
            </Typography>
            <List>
              {announcements.map((announcement) => (
                <div key={announcement.id}>
                  <ListItem>
                    {editedAnnouncementId === announcement.id ? (
                      <Input
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        value={announcement.text}
                        onChange={(e) => {
                          if (e.target.value.length <= maxInputLength) {
                            const editedAnnouncement = {
                              ...announcement,
                              text: e.target.value,
                            };
                            setAnnouncements((prevAnnouncements) =>
                              prevAnnouncements.map((prevAnnouncement) =>
                                prevAnnouncement.id === editedAnnouncement.id
                                  ? editedAnnouncement
                                  : prevAnnouncement
                              )
                            );
                          }
                        }}
                        inputProps={{
                          maxLength: maxInputLength,
                        }}
                      />
                    ) : (
                      <div>
                        <Typography variant="h6">
                          {announcement.title}
                        </Typography>
                        <ListItemText
                          primary={announcement.text}
                          secondary={announcement.date}
                        />
                      </div>
                    )}
                    {editedAnnouncementId === announcement.id ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(announcement.id)}
                        style={{
                          marginTop: "16px",
                          marginLeft: "auto",
                          display: "block",
                        }}
                      >
                        Edit
                      </Button>
                    )}
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        )}
      </Paper>
    </Container>
  );
}

export default AdminAnnouncements;
