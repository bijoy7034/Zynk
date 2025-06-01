import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

function ProfileCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        m: 2,
        borderRadius: 3,
        border: "0.04px solid rgb(200, 200, 200)",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{
          p: 2,
        }}
      >
        <Avatar
          sx={{
            width: 70,
            height: 70,
            backgroundColor: "rgb(14, 14, 14)",
          }}
        >
          BA
        </Avatar>
        <Box
          sx={{ mt: 3, borderBottom: "0.04px solid rgb(200, 200, 200)" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Bijoy Anil
          </Typography>
          <Typography variant="body2" sx={{ color: "#8899a6" }}>
            bijoyanil74@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <small>Penting gak Penting yang penting Posting</small>
          </Typography>

          <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                6,664
              </Typography>
              <Typography variant="caption" sx={{ color: "#8899a6" }}>
                Following
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                9,991
              </Typography>
              <Typography variant="caption" sx={{ color: "#8899a6" }}>
                Followers
              </Typography>
            </Box>
          </Box>
        </Box>
        <Button
          variant="outlined"
          size="small"
          sx={{
            m: 2,
            border: "0.1px solid",
            borderColor: "rgb(14, 14, 14)",
            color: "rgb(14, 14, 14)",
            textTransform: "none",
          }}
        >
          My Profile
        </Button>
      </Box>
    </Paper>
  );
}

export default ProfileCard;
