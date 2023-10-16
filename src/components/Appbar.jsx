import { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Container, Link, Typography } from '@mui/material'
import Image from 'mui-image'
import headerImg from "../assets/images/nav-header-png.png";
import "./Appbar.scss"


const linkStyles = {
  textDecoration: "none",
  color: "text.primary",
  fontSize: 16,
  letterSpacing: 3, 
  fontFamily: "Bodoni",
  opacity: .75,
  transition: "all 150ms ease-in-out",
  "&:hover": {
    transform: "scale(1.025)"
  }
}
const Appbar = () => {

  const [ currentOffset, setCurrentOffset ] = useState(window.pageYOffset);
  const [ isScrolledDown, setIsScrolledDown ] = useState("top");

  window.onscroll = () => {
    if(window.pageYOffset < 500) {
      setIsScrolledDown("top");
    } else {
      if((currentOffset + 3) < window.pageYOffset || currentOffset > (window.pageYOffset + 8) ) {
        setIsScrolledDown(currentOffset < window.pageYOffset);
      }
      setCurrentOffset(window.pageYOffset)
    }
  }

  return (
    <>
      <Container>
        <Box sx={{mt: 5, mb: 4}}>
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box>
              <Image src={headerImg} alt="MARK & GAEA" fit="cover" height={175}/>
            </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent: "center", mt: 1.75}}>
            <Typography sx={{fontSize: 13, letterSpacing: 6, opacity: .4, px: 1.5}}>-</Typography>
            <Typography sx={{fontSize: 14, letterSpacing: 6, opacity: .7}}>12</Typography>
            <Typography sx={{fontSize: 13, letterSpacing: 6, opacity: .6, transform: "translateY(-15%)", px: 1}}>.</Typography>
            <Typography sx={{fontSize: 14, letterSpacing: 6, opacity: .7}}>22</Typography>
            <Typography sx={{fontSize: 13, letterSpacing: 6, opacity: .7, transform: "translateY(-15%)", px: 1}}>.</Typography>
            <Typography sx={{fontSize: 14, letterSpacing: 6, opacity: .6}}>23</Typography>
            <Typography sx={{fontSize: 13, letterSpacing: 6, opacity: .4, px: 1.5}}>-</Typography>
          </Box>

        </Box>
      </Container>
      <Box item xs={12} sx={{position: "sticky", top: 0, zIndex: 20, py: 1.2, boxShadow: 0}} 
            className={`navbar ${isScrolledDown === "top" ? "page-top" : isScrolledDown ? "scroll-down" : "scroll-up"}`} 
>
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