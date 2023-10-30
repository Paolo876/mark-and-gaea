import React from 'react'
import { Box, Typography, Button, Divider,  } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const containerStyles = {
  backgroundColor: "background.default",
  py: 2,
  px: 3, 
  zIndex: 2
}
const DeleteItem = ({ data, handleClose }) => {
  return (
    <Box sx={containerStyles}>
      <Box>
        <Typography sx={{textTransform: "uppercase", fontSize: {xs: 19, sm: 21, md: 23, lg:25}, letterSpacing: 2, fontFamily: "Bodoni-Bold"}}>Delete</Typography>
      </Box>
      <Divider/>
      <Box mt={{xs: 2.5, sm: 3, md:4}}>
        <Typography sx={{fontSize: {xs: 15, sm: 16, md: 17, lg: 18}, letterSpacing: .5, mb: .25, fontFamily: "Bodoni-Bold"}}>Are you sure you want to delete this item?</Typography>
        <Box sx={{mt: 2, p: 2}}>
          <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25, fontFamily: "Bodoni-Bold"}}>- {data.name}</Typography>
          {data.isAttending ? 
            <Box sx={{display: "flex", flexDirection: "row"}}>
              <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- Attending</Typography>
              <CheckCircleIcon sx={{fontSize: "inherit"}} color="secondary"/>
            </Box>
            : 
            <Box>
              <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- Not Attending</Typography>
              <CancelIcon sx={{fontSize: "inherit"}} color="warning"/>
            </Box>
          }
          <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- {data.phone}</Typography>
        </Box>
      </Box>
      <Box mt={{xs: 5, sm: 6, md:8}} sx={{display: "flex", justifyContent: "right", gap: 2}}>
        <Button variant="contained" color='error'>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Box>
    </Box>
  )
}

export default DeleteItem