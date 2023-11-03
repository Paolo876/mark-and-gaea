import { useState } from 'react'
import { Box, Typography, TextField, Divider, Radio, RadioGroup, FormControlLabel, FormControl, Alert, Button } from '@mui/material'
import { useFirestore } from "../../hooks/useFirestore"
import LoadingButton from '@mui/lab/LoadingButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const containerStyles = {
  backgroundColor: "background.default",
  py: 2,
  px: 3, 
  zIndex: 2
}

const DeleteItem = ({ data, handleClose, guestsList }) => {
  const [ isLoading, setIsLoading ] = useState(false)
  const { updateDocument, response: { error } } = useFirestore("admin")

  const handleDelete = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // update changes
    const updatedGuestsList = guestsList.filter(item => (item.name !== data.name || item.phone !== data.phone))
    
    // updateDocument
    try {
      await updateDocument({guestsList: updatedGuestsList}, "guests")
      setIsLoading(false)
      handleClose()
    } catch(err) {
      setIsLoading(false)
      // error alert
    }
  }

  console.log(guestsList)
  return (
    <Box sx={containerStyles}>
      {/* backdrop */}
      <Box sx={{zIndex: -1, height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0}} onClick={isLoading ? null : handleClose} ></Box>

      <Box>
        <Typography sx={{textTransform: "uppercase", fontSize: {xs: 19, sm: 21, md: 23, lg:25}, letterSpacing: 2, fontFamily: "Bodoni-Bold"}}>Delete</Typography>
      </Box>
      <Divider/>
      <Box mt={{xs: 2.5, sm: 3, md:4}}>
        <Box mb={2}>
          {error && <Alert severity="error" size="small">{error}</Alert>}
        </Box>
        <Typography sx={{fontSize: {xs: 15, sm: 16, md: 17, lg: 18}, letterSpacing: .5, mb: .25, fontFamily: "Bodoni-Bold"}}>Are you sure you want to delete this item?</Typography>
        <Box sx={{mt: 2, p: 2}}>
          <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25, fontFamily: "Bodoni-Bold"}}>- {data.name}</Typography>
          {data.isAttending ? 
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: .75}}>
              <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- Attending</Typography>
              <CheckCircleIcon sx={{fontSize: "inherit"}} color="secondary"/>
            </Box>
            : 
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: .75}}>
              <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- Not Attending</Typography>
              <CancelIcon sx={{fontSize: "inherit"}} color="warning"/>
            </Box>
          }
          <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- {data.phone}</Typography>
        </Box>
      </Box>
      <Box mt={{xs: 5, sm: 6, md:8}} sx={{display: "flex", justifyContent: "right", gap: 2}}>
        <LoadingButton
          color="error" 
          onClick={handleDelete}
          loading={isLoading}
          disabled={isLoading}
          loadingPosition="end"
          variant="contained"
          endIcon={<></>}
        >
          <span>{isLoading ? "Updating..." : "Delete"}</span>
        </LoadingButton>        
          <Button onClick={handleClose}>Cancel</Button>
      </Box>
    </Box>
  )
}

export default DeleteItem