import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CategoryIcon from '@mui/icons-material/Category';

const MuiTab = () => {
  const [value, setValue] = useState("1");
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: '300px'}}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            // centered
            variant="scrollable"
            scrollButtons='auto'
          >
            <Tab label="Tab One" value="1" icon={<CategoryIcon />} iconPosition='start'/>
            <Tab label="Tab Two" value="2" disabled/>
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab Three" value="4" />
            <Tab label="Tab Three" value="5" />
            <Tab label="Tab Three" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Three</TabPanel>
        <TabPanel value="5">Panel Three</TabPanel>
        <TabPanel value="6">Panel Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTab;
