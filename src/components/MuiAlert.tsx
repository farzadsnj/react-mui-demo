import { Alert, Stack, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Error Alert</Alert>
      <Alert severity="warning">warning Alert</Alert>
      <Alert severity="info">info Alert</Alert>
      <Alert severity="success">success Alert</Alert>

      <Alert variant="outlined" severity="error">
        Error Alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        warning Alert
      </Alert>
      <Alert variant="outlined" severity="info">
        info Alert
      </Alert>
      <Alert variant="outlined" severity="success">
        success Alert
      </Alert>

      <Alert variant="filled" severity="error">
        Error Alert
        <AlertTitle>error</AlertTitle>
      </Alert>
      <Alert variant="filled" severity="warning">
        warning Alert
        <AlertTitle>warning</AlertTitle>
      </Alert>
      <Alert variant="filled" severity="info">
        info Alert
        <AlertTitle>info</AlertTitle>
      </Alert>
      <Alert variant="filled" severity="success">
        success Alert
        <AlertTitle>success</AlertTitle>
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon />}
        onClose={() => alert("close alert")}
        action={
          <Button color="inherit" size="small">
            undo
          </Button>
        }
      >
        success Alert
        <AlertTitle>success</AlertTitle>
      </Alert>
    </Stack>
  );
};

export default MuiAlert;