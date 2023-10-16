import { useState } from 'react';
import { Box, Container, Link, Typography } from '@mui/material'
import Image from 'mui-image'
import headerImg from "../assets/images/nav-header-png.png";
import "./Appbar.scss"
import { HashLink as ReactLink } from 'react-router-hash-link';

const linkStyles = {
  textDecoration: "none",
  color: "text.primary",
  fontSize: 17,
  letterSpacing: 4, 
  fontFamily: "Bodoni",
  opacity: .9,
  transition: "all 200ms ease-in-out",
  position: "relative",
  color: "secondary.main",
  textShadow: "1px 1px 1px rgba(255,255,255, .025)",

  "&::before, &::after": {
    content: "''",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    height: "1px",
    width: "3px",
    background:"black",
    opacity: 0,
    transition: "all 250ms ease"
  },
  "&::before": {
    left: 0,
  },
  "&::after": {
    right: 0,
  },
  "&:hover": {
    opacity: 1,
    textShadow: "1px 1px 1px rgba(0,0,0,.05)",
    "&::before": {
      left: "-11px",
      opacity: .5
    },
    "&::after": {
      right: "-8px",
      opacity: .5

    },

  },
}


const Appbar = () => {

  const [ currentOffset, setCurrentOffset ] = useState(window.pageYOffset);
  const [ isScrolledDown, setIsScrolledDown ] = useState("top");

  window.onscroll = () => {
    if(window.pageYOffset < 300) {
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
          <Box sx={{display: "flex", justifyContent: "center", mt: 2}}>
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
      <Box 
        item xs={12} 
        sx={{position: "sticky", top: 0, zIndex: 20, py: 2, boxShadow: 0}} 
        className={`navbar ${isScrolledDown === "top" ? "page-top" : isScrolledDown ? "scroll-down" : "scroll-up"}`} 
      >
        <Container>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Link component={ReactLink} to="/" sx={linkStyles}>Home</Link>
            <Link component={ReactLink} to="/#details" sx={linkStyles}>Details</Link>
            <Link component={ReactLink} to="/" sx={linkStyles}>Map</Link>
            <Link component={ReactLink} to="/" sx={linkStyles}>RSVP</Link>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Appbar