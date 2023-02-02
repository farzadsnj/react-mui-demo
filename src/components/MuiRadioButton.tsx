import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log({ value });
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-exp-label">years of experience</FormLabel>
        <RadioGroup
          row
          name="job-exp-gp"
          aria-label="job-exp-label"
          value={value}
          onChange={handleOnChange}
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-8" value="6-8" />
        </RadioGroup>
        <FormHelperText>Please select valid Radio</FormHelperText>
      </FormControl>
    </Box>
  );
};
