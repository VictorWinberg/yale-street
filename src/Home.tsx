import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Badge,
  Popover,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import AlarmIcon from "@mui/icons-material/Alarm";
import { command, subscribe } from "./mqtt";
import { useUser } from "./state";

import NotificationsIcon from "@mui/icons-material/Notifications";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";

type Message = {
  type: string;
  message: string;
};

export const Home = () => {
  const [locked, setLocked] = useState(false);
  const { updateUsername } = useUser();

  const [messages, setMessages] = useState<Message[]>([]);

  subscribe("lights/control", (message) => {
    setMessages([...messages, { type: "alarm", message }]);
  });

  // State for managing the popover
  const [anchorEl, setAnchorEl] = useState<any>(null);

  // Function to open the popover
  const handleOpenPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to close the popover
  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  // Check if the popover is open
  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      {/* Notification */}
      <IconButton
        color="primary"
        onClick={handleOpenPopover}
        sx={{ position: "absolute", top: "1em", right: "1em" }}
      >
        <Badge badgeContent={messages.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Box>
        {/* Lock and Unlock Buttons */}
        {locked ? (
          <IconButton
            onClick={() => {
              setLocked(false);
              command("LOCK");
            }}
          >
            <LockIcon sx={{ fontSize: "3em", color: "red" }} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setLocked(true);
              command("UNLOCK");
            }}
          >
            <LockOpenIcon sx={{ fontSize: "3em", color: "green" }} />
          </IconButton>
        )}
      </Box>

      {/* Alarm and Disarm Buttons */}
      <Button variant="contained" onClick={() => command("ALARM")}>
        ALARM
      </Button>
      <Button variant="contained" onClick={() => command("DISARM")}>
        DISARM
      </Button>
      <Button variant="contained" onClick={() => updateUsername("")}>
        Logout
      </Button>

      {/* Popover for showing issue list */}
      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box p={2}>
          <Typography variant="h6">Issues</Typography>
          <List>
            {messages.map((message, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <NotificationImportantIcon />
                </ListItemIcon>
                <ListItemText primary={message.message} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </Stack>
  );
};
