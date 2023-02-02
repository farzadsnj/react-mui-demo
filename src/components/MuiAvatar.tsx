import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "primary.light" }}>farzad</Avatar>
        <Avatar sx={{ bgcolor: "secondary.light" }}>snj</Avatar>
        <AvatarGroup max={1}>
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg"></Avatar>
          <Avatar src="https://randomuser.me/api/portraits/men/79.jpg"></Avatar>
          <Avatar src="https://randomuser.me/api/portraits/men/79.jpg"></Avatar>
        </AvatarGroup>
        <Avatar
          variant="square"
          sx={{ bgcolor: "secondary.light", width: "48px", height: "48px" }}
        >
          snj
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "secondary.light", width: "48px", height: "48px" }}
        >
          snj
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
