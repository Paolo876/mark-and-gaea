import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper, IconButton, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MessageIcon from '@mui/icons-material/Message';


const headerStyles = {
	fontFamily: "Bodoni-bold",
	textTransform: "uppercase",
	letterSpacing: 3,
	fontSize: 17,
}

const bodyStyles = {
	fontFamily: "Bodoni",
	letterSpacing: 1.25,
	fontSize: 15
}

function createData(name, isAttending, phone, message, createdAt) {
  return { name, isAttending, phone, message, createdAt };
}


const mockDate = new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})
export default function BasicTable() {
	const rows = [
		createData('Paolo', true, "09053122966", "Hello", mockDate),
		createData('Paolo2', false, "09053122966", "", mockDate),
		createData('Paolo Paolo Paolo Paolo Paolo', false, "09053122966", "", mockDate),
	
	];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "fit-content" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyles}>Name</TableCell>
            <TableCell sx={headerStyles} align="center">Attending</TableCell>
            <TableCell sx={headerStyles} align="center">Contact #</TableCell>
            <TableCell sx={headerStyles} align="center">Message</TableCell>
            <TableCell sx={headerStyles} align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={bodyStyles} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.isAttending ? <CheckCircleIcon color="success"/> : <CancelIcon color="warning"/>}</TableCell>
              <TableCell sx={bodyStyles} align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.message ? <Button startIcon={<MessageIcon/>} size="small" variant="contained" color="secondary" sx={{letterSpacing: 1}}>View Message</Button> : ""}</TableCell>
							<TableCell sx={bodyStyles} align="right">{row.createdAt}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}