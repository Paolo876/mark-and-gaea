import React from 'react'
import { Box, Typography, TextField, Divider } from '@mui/material'


const containerStyles = {
  backgroundColor: "background.default",
  py: 2,
  px: 3, 
  zIndex: 2
}


const EditItem = ({ data, handleClose }) => {
  return (
    <Box sx={containerStyles}>
      <Box>
        <Typography sx={{textTransform: "uppercase", fontSize: {xs: 19, sm: 21, md: 23, lg:25}, letterSpacing: 2, fontFamily: "Bodoni-Bold"}}>Edit</Typography>
      </Box>
      <Divider/>
      <Box mt={{xs: 2.5, sm: 3, md:4}}>
      
      </Box>
    </Box>
  )
}

export default EditItem