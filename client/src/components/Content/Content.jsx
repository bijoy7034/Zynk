import { Avatar, Box, Chip, Paper, Typography } from "@mui/material";
import React from "react";
import PostCard from "../PostCard/PostCard";

function Content() {
  return (
    <><Paper
          elevation={0}
          sx={{
              m: 2,
              borderRadius: 3,
              border: "0.04px solid rgb(200, 200, 200)",
          }}
      >
          <Box
              sx={{
                  p: 2,
                  top: 0,
              }}
          >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={{ width: 40, height: 40 }}>Y</Avatar>
                  <Typography variant="h6">What's happening?</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  {["Photo", "Video"].map((option, index) => (
                      <Chip
                          key={index}
                          label={option}
                          variant="outlined"
                          sx={{
                              border: "0.04px solid rgb(200, 200, 200)",
                              color: "black",
                              "&:hover": { backgroundColor: "rgba(29, 161, 242, 0.1)" },
                          }} />
                  ))}
              </Box>
          </Box>

      </Paper><PostCard /></>
  );
}

export default Content;
