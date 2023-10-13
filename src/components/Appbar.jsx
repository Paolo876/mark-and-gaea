import React from 'react'
import { AppBar, Box, Link, Typography } from '@mui/material'
const Appbar = () => {
  return (
    <AppBar component="nav" sx={{background: "none", boxShadow: 0, display: "flex", flexDirection: "column"}}>
      <Box>
        <Typography color="text.primary">M|G</Typography>
      </Box>
      <Box>
        <Link>Details</Link>
        <Link>Map</Link>
        <Link>RSVP</Link>
      </Box>
    </AppBar>  
  )
}

export default Appbar