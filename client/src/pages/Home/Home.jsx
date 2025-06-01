import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { Box, Paper } from "@mui/material";
import FollowSuggest from "../../components/FollowSuggest/FollowSuggest";
import Content from "../../components/Content/Content";
import AsideHome from "../../components/AsideHome/AsideHome";

function Home() {
  return (
    <Paper
      elevation={0}
      sx={{ display: "flex", justifyContent: "space-around" }}
    >
      <Box width="25%" elevation={0}>
        <ProfileCard />
        <FollowSuggest />
      </Box>
      <Box width="50%" elevation={0}>
        <Content />
      </Box>
      <Box width="25%" elevation={0}>
        <AsideHome />
      </Box>
    </Paper>
  );
}

export default Home;
