import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const MuiDateTimePickerLab = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  console.log({ selectedDate });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={4} sx={{ width: "250px" }}>
        <DatePicker
          label="Date Picker"
          value={selectedDate}
          onChange={(newValue: any | Date) => {
            setSelectedDate(newValue);
          }}
          renderInput={(params: any | string) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default MuiDateTimePickerLab;
