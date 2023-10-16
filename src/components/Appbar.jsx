import React from 'react'
import { Link as ReactLink } from 'react-router-dom';
import { Box, Container, Link } from '@mui/material'
import Image from 'mui-image'
import headerImg from "../assets/images/nav-header-png.png";

const linkStyles = {
  textDecoration: "none",
  color: "text.primary",
  fontSize: 20,
  letterSpacing: 3, 
  fontFamily: "Bodoni",
  opacity: .75,

}
const Appbar = () => {

  
  return (
    <>
      <Container>
        <Box sx={{display: "flex", justifyContent: "center", mt: 4, mb: 5}}>
          <Box>
            <Image src={headerImg} alt="MARK & GAEA" fit="scale-down"/>
          </Box>
        </Box>
      </Container>
      <Box item xs={12} sx={{position: "sticky", top: 0, zIndex: 20, backgroundColor: "background.default", py: 1.2, boxShadow: 5}}>
        <Container>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Link component={ReactLink} to="/" sx={linkStyles}>Home</Link>
            <Link component={ReactLink} to="/" sx={linkStyles}>Details</Link>
            <Link component={ReactLink} to="/" sx={linkStyles}>Map</Link>
            <Link component={ReactLink} to="/" sx={linkStyles}>RSVP</Link>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Appbar