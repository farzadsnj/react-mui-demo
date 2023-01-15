import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiTooltip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="top"
      arrow
      enterDelay={500}
      leaveDelay={200}
      onClick={() => alert("clicked")}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;
