import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const MuiDateTimePickerLab = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  //   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  console.log("date", { selectedDate });
  console.log("time", { selectedTime });
  console.log("dateTime", { selectedDateTime });
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

        <TimePicker
          label="Time Picker"
          value={selectedTime}
          onChange={(newValue: any) => {
            setSelectedTime(newValue);
          }}
          renderInput={(params: any) => <TextField {...params} />}
        />

        <DateTimePicker
          label="dateTime Picker"
          value={selectedDateTime}
          onChange={(newValue: any) => {
            setSelectedDateTime(newValue);
          }}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default MuiDateTimePickerLab;
