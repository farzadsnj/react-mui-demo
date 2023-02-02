import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="small secondary" size="small" color="secondary" />
        <TextField
          label="required"
          size="small"
          color="secondary"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "password is required" : "don't share your password"
          }
        />
        <TextField
          label="password"
          type="password"
          size="small"
          color="secondary"
          required
          helperText="do not share your password"
        />
        <TextField
          label="password"
          type="password"
          size="small"
          color="secondary"
          required
          helperText="do not share your password"
          disabled
        />
        <TextField
          label="read only"
          size="small"
          color="secondary"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
