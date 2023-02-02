import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Nav speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<ContentPasteIcon />} tooltipTitle="paste" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="share" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
