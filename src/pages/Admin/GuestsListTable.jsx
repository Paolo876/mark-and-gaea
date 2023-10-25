import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper } from '@mui/material';

// import Paper from '@mui/material/Paper ';

function createData(name, isAttending, phone, message) {
  return { name, isAttending, phone, message };
}

const rows = [
  createData('Paolo', true, "09053122966", "Hello"),

];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">isAttending</TableCell>
            <TableCell align="right">Contact Number</TableCell>
            <TableCell align="right">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.isAttending}yes</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}