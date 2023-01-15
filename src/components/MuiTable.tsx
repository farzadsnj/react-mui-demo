import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last:child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Lynnette",
    last_name: "Woodcroft",
    email: "lwoodcroft0@phpbb.com",
    gender: "Female",
    ip_address: "57.73.30.129",
  },
  {
    id: 2,
    first_name: "Janeva",
    last_name: "Schankel",
    email: "jschankel1@ted.com",
    gender: "Polygender",
    ip_address: "177.39.91.184",
  },
  {
    id: 3,
    first_name: "Dale",
    last_name: "Pearson",
    email: "dpearson2@wufoo.com",
    gender: "Male",
    ip_address: "206.109.212.164",
  },
  {
    id: 4,
    first_name: "Kyle",
    last_name: "Gilliver",
    email: "kgilliver3@123-reg.co.uk",
    gender: "Female",
    ip_address: "149.245.242.136",
  },
  {
    id: 5,
    first_name: "Jaclin",
    last_name: "Muehle",
    email: "jmuehle4@weibo.com",
    gender: "Female",
    ip_address: "40.192.174.214",
  },
  {
    id: 6,
    first_name: "Marisa",
    last_name: "Chatto",
    email: "mchatto5@arizona.edu",
    gender: "Female",
    ip_address: "113.132.178.102",
  },
  {
    id: 7,
    first_name: "Baryram",
    last_name: "Jeandot",
    email: "bjeandot6@ameblo.jp",
    gender: "Male",
    ip_address: "168.61.15.119",
  },
  {
    id: 8,
    first_name: "Craggie",
    last_name: "Giamelli",
    email: "cgiamelli7@printfriendly.com",
    gender: "Male",
    ip_address: "192.31.23.15",
  },
  {
    id: 9,
    first_name: "Ferd",
    last_name: "Ellams",
    email: "fellams8@edublogs.org",
    gender: "Male",
    ip_address: "163.29.80.16",
  },
  {
    id: 10,
    first_name: "Kare",
    last_name: "Meni",
    email: "kmeni9@google.ca",
    gender: "Female",
    ip_address: "70.216.26.89",
  },
];

export default MuiTable;
