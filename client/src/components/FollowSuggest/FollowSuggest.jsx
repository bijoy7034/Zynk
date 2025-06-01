import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

function FollowSuggest() {
  const suggestedUsers = [
    { name: "Product Owner", handle: "@ProductHunt", verified: false },
    { name: "Anuj Hunt", handle: "@MZuckerberg_", verified: false },
    { name: "Ryan Hoover", handle: "@rrhoover", verified: false },
    { name: "Product Hunt", handle: "@MZuckerberg_", verified: false },
  ];

  const splitName = (name) => {
    let words = name.split(" ").slice(0, 2);
    return words.map((word) => word.slice(0, 1)).join("");
  };

  return (
    <Paper
      elevation={0}
      sx={{
        m: 2,
        p: 2,
        borderRadius: 3,
        border: "0.04px solid rgb(200, 200, 200)",
      }}
    >
      <Box>
        <Typography variant="body1" marginBottom={2} fontWeight={700}>
          Follow Suggestions
        </Typography>
        {suggestedUsers.map((user, index) => {
          const colors = [
            "#f44336",
            "#2196f3",
            "#4caf50",
            "#ff9800",
            "#9c27b0",
          ]; 
          const avatarColor = colors[index % colors.length];
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop={2}
            >
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: avatarColor,
                }}
              >
                <small>{splitName(user.name)}</small>
              </Avatar>

              <Box>
                <Typography fontWeight={700}>{user.name}</Typography>
                <Typography variant="body2">
                  <small>{user.handle}</small>
                </Typography>
              </Box>

              <Button
                variant="outlined"
                size="small"
                sx={{
                  border: "0.1px solid",
                  borderColor: "rgb(14, 14, 14)",
                  color: "rgb(14, 14, 14)",
                  textTransform: "none",
                  minWidth: "auto",
                  px: 2,
                }}
              >
                Follow
              </Button>
            </Box>
          );
        })}
        <center style={{ margin: "10px" }}>
          <Button
            sx={{
              color: "#1da1f2",
              textTransform: "none",
              p: 0,
              minWidth: "auto",
            }}
          >
            Show More
          </Button>
        </center>
      </Box>
    </Paper>
  );
}

export default FollowSuggest;
