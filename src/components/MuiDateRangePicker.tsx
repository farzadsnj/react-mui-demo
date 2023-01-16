import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';

const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log({value})
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box width="500px">
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
    </LocalizationProvider>
  );
};

export default MuiDateRangePicker;