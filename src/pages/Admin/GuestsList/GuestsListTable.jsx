import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper, IconButton, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MessageIcon from '@mui/icons-material/Message';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchAndFilterBar from './SearchAndFilterBar';
import { timestamp } from '../../../firebase/config';

const headerStyles = {
	fontFamily: "Bodoni-bold",
	textTransform: "uppercase",
	letterSpacing: 3,
	fontSize: 18,
	// py: 1.5,
}

const bodyStyles = {
	fontFamily: "Bodoni",
	letterSpacing: 1,
	fontSize: 15,
}

function createData(name, isAttending, phone, message, createdAt) {
  return { name, isAttending, phone, message, createdAt };
}


const mockDate = new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})


export default function BasicTable({ guestsList }) {
	const rows = guestsList.map(item => createData(item.name, item.isAttending, item.phone, item.message, item.createdAt.toDate().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})))
	// const rows = [
	// 	createData('Paolo', true, "09053122966", "Hello", mockDate),
	// 	createData('Paolo2', false, "09053122966", "", mockDate),
	// 	createData('Paolo Paolo Paolo Paolo Paolo', false, "09053122966", "", mockDate),	
	// ];
  return (
		<Box sx={{display: "flex", flexDirection: "column"}}>
			<SearchAndFilterBar/>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: "fit-content" }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell sx={headerStyles}>Name</TableCell>
							<TableCell sx={headerStyles} align="center">Attending</TableCell>
							<TableCell sx={headerStyles} align="center">Contact #</TableCell>
							<TableCell sx={headerStyles} align="center">Message</TableCell>
							<TableCell sx={headerStyles} align="right">Date</TableCell>
							<TableCell sx={headerStyles} align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell sx={{...bodyStyles, minWidth: 320}} component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="center">{row.isAttending ? <CheckCircleIcon color="success"/> : <CancelIcon color="warning"/>}</TableCell>
								<TableCell sx={bodyStyles} align="center">{row.phone}</TableCell>
								<TableCell align="center">{row.message ? <Button startIcon={<MessageIcon/>} size="small" variant="contained" color="secondary" sx={{letterSpacing: 1, fontSize: 12, fontFamily: "Bodoni"}}>View Message</Button> : ""}</TableCell>
								<TableCell sx={bodyStyles} align="right">{row.createdAt}</TableCell>
								{/* actions */}
								<TableCell sx={bodyStyles} align="right">
									<Box ml={2} sx={{display: "flex", flexDirection: "row", gap: 1, justifyContent: "right"}}>
										<IconButton color="primary"><EditIcon fontSize='small'/></IconButton>
										<IconButton color="error"><DeleteIcon fontSize='small'/></IconButton>
									</Box>
								</TableCell>

							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

		</Box>
  );
}