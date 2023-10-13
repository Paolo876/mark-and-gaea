import React from 'react'
import { AppBar, Box, Link, Typography, Container } from '@mui/material'
const Appbar = () => {
  return (
    <AppBar component="nav" sx={{background: "none", boxShadow: 0, py: 2}}>
      <Container>
        <Box sx={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
          <Box>
            <Typography color="text.primary">M|G</Typography>
          </Box>
          <Box sx={{display: "flex", gap: 5}}>
            <Link><Typography>Details</Typography></Link>
            <Link><Typography>Map</Typography></Link>
            <Link><Typography>RSVP</Typography></Link>
          </Box>
        </Box>
      </Container>
    </AppBar> 
  )
}

export default Appbar