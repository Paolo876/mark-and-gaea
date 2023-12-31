import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper, IconButton, Button, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MessageIcon from '@mui/icons-material/Message';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

//components
import SearchAndFilterBar from './SearchAndFilterBar';
import MessageModal from '../../../components/MessageModal';
import AdminActionModal from '../../../components/AdminActionModal/AdminActionModal';

const headerStyles = {
	fontFamily: "Bodoni-bold",
	textTransform: "uppercase",
	letterSpacing: {lg:3},
	fontSize: {xs: 10, sm: 13, md:16, lg:18},
	// py: 1.5,
  px: {xs: .5, sm: 1, md: 2}
}

const bodyStyles = {
	fontFamily: "Bodoni",
	letterSpacing: 1,
	fontSize: {xs: 9, sm: 10, md: 13, lg: 15},
  px: {xs: .5, sm: 1, md: 2}

}

function createData(name, isAttending, phone, message, createdAt) {
  return { name, isAttending, phone, message, createdAt };
}



export default function BasicTable({ guestsList }) {
  const initialData = guestsList.map(item => createData(item.name, item.isAttending, item.phone, item.message, item.createdAt.toDate().toLocaleDateString('en-US', {year: '2-digit', month: '2-digit', day: '2-digit'})));
  const [ updatedDocument, setUpdatedDocument ] = useState(initialData);
  const [ showModal, setShowModal ] = useState({isShown: false, data: null});
  const [ showActionModal, setShowActionModal ] = useState({isShown: false, data: null, action: null});
  
  useEffect(() => {
    setUpdatedDocument(guestsList.map(item => createData(item.name, item.isAttending, item.phone, item.message, item.createdAt.toDate().toLocaleDateString('en-US', {year: '2-digit', month: '2-digit', day: '2-digit'}))))
  }, [guestsList])

  const handleSortFilterChange = ({sort, filter, clear}) => {
    // sort
    if(sort === "name") {
      setUpdatedDocument([...updatedDocument].sort((a, b) => a.name.localeCompare(b.name)))
    } else if (sort === "date") {
      setUpdatedDocument([...updatedDocument].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
    } 
    else if(sort === null){
      setUpdatedDocument(initialData)
    }
    // filter
    if(filter.includes("attending")){
      if(filter.includes("message")) {
        setUpdatedDocument(prevState => prevState.filter(item => item.isAttending && item.message !== ""))
      } else {
        setUpdatedDocument(prevState => prevState.filter(item => item.isAttending))
      }
    } else if(filter.includes("notAttending")) {
      if(filter.includes("message")) {
        setUpdatedDocument(prevState => prevState.filter(item => !item.isAttending && item.message !== ""))
      } else {
        setUpdatedDocument(prevState => prevState.filter(item => !item.isAttending))
      }    
    } 
    else if(filter.includes("message") && !filter.includes("attending") &&  !filter.includes("notAttending")) {
      setUpdatedDocument(prevState => prevState.filter(item => item.message !== ""))
    }
    // reset
    if(clear) {
      setUpdatedDocument(initialData)
    }
  }

  const handleSearch = (input) => {
    if(input === ""){
      setUpdatedDocument(initialData)
    } else {
      setUpdatedDocument([...initialData.filter(item => item.name.toLowerCase().includes(input.toLowerCase())), ...initialData.filter(item => item.phone.includes(input))])
    }
  }

  return (
		<Box sx={{display: "flex", flexDirection: "column"}}>
			<SearchAndFilterBar handleSortFilterChange={handleSortFilterChange} handleSearch={handleSearch} guestsList={guestsList}/>
      <MessageModal 
        showModal={showModal.isShown} 
        handleClose={() => setShowModal({isShown: false, data:null})} 
        data={showModal.data}
      />
      <AdminActionModal 
        showModal={showActionModal.isShown} 
        handleClose={() => setShowActionModal({isShown: false, data:null, action : null})} 
        data={showActionModal.data} 
        action={showActionModal.action}
        guestsList={guestsList}
      />

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: "fit-content" }} aria-label="simple table" >
					<TableHead>
						<TableRow>
							<TableCell sx={headerStyles}>Name</TableCell>
							<TableCell sx={headerStyles} align="center">Attending</TableCell>
							<TableCell sx={headerStyles} align="center">Contact #</TableCell>
							<TableCell sx={headerStyles} align="center">Message</TableCell>
							<TableCell sx={{...headerStyles, display: {xs: "none", sm: "table-cell"}}} align="right">Date</TableCell>
							<TableCell sx={{...headerStyles, display: {xs: "none", sm: "table-cell"}}} align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{updatedDocument && updatedDocument.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell sx={{...bodyStyles, minWidth: {lg:320}}} component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="center">
                  {row.isAttending ? <CheckCircleIcon color="success" sx={{fontSize: {xs: 16, sm: 20, md:24, lg: 26}}}/> : <CancelIcon color="warning" sx={{fontSize: {xs: 16, sm: 20, md:24, lg: 26}}}/>}
                </TableCell>
								<TableCell sx={bodyStyles} align="center">{row.phone}</TableCell>
								<TableCell align="center">
									<Box sx={{display:{xs: "none", sm: "initial"}}}>
									  {row.message ? <Button 
                      startIcon={<MessageIcon/>} 
                      size="small" 
                      variant="contained" 
                      color="secondary" 
                      sx={{letterSpacing: {lg:1}, fontSize: {xs: 9, md: 10, lg:12}, fontFamily: "Bodoni"}}
                      onClick={() => setShowModal({isShown: true, data: row})}
                      >
                        Read
                      </Button> : "-"}
                  </Box>
									<Box sx={{display:{xs: "initial", sm: "none"}, width: "fit-content"}}>
									  {row.message ? <Button 
                      size="small" 
                      variant="contained" 
                      color="secondary" 
                      sx={{fontSize: 12, width: "fit-content", minWidth: 0}}
                      onClick={() => setShowModal({isShown: true, data: row})}
                      >
                        <MessageIcon sx={{fontSize: "inherit"}}/>
                      </Button> : "-"}
                  </Box>
								</TableCell>
								<TableCell sx={{...bodyStyles, display: {xs: "none", sm: "table-cell"}}} align="right">{row.createdAt}</TableCell>
								{/* actions */}
								<TableCell sx={{...bodyStyles, display: {xs: "none", sm: "table-cell"}}} align="right">
									<Box ml={{xs: 1, md:2}} sx={{display: "flex", flexDirection: "row", gap: 1, justifyContent: "right"}}>
                    <Tooltip title="Edit" arrow>
                      <IconButton color="primary" onClick={() => setShowActionModal({isShown: true, data: row, action: "edit"})}>
                      <EditIcon fontSize='small'/>
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" arrow>
                      <IconButton color="warning" onClick={() => setShowActionModal({isShown: true, data: row, action: "delete"})}>
                        <DeleteIcon fontSize='small'/>
                      </IconButton>
                    </Tooltip>
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