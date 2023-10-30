import { useState } from 'react';
import { Box, Container, Typography, Fade, Link } from '@mui/material'
import { NavLink, Link as ReactLink } from 'react-router-dom';
import Image from 'mui-image'
import headerImg from "../assets/images/nav-header-png-350.png";
import "./Appbar.scss"

const linkStyles = {
  textDecoration: "none",
  color: "text.primary",
  fontSize: {xs: 11, sm: 13, md: 14.5, lg:15.5},
  letterSpacing: {xs: 1.5, sm: 3, md: 3.5}, 
  textTransform: "uppercase",
  fontFamily: "Bodoni",
  opacity: {xs:1, lg: .9},
  transition: "all 200ms ease-in-out",
  position: "relative",
  color: "secondary.main",
  textShadow: "1px 1px 1px rgba(255,255,255, .025)",
  cursor: "pointer", 
  userSelect: "none",
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
    textShadow: "1px 1px 1px rgba(0,0,0,.025)",
    letterSpacing: {xs: 1.75, sm: 3.25, md: 3.75}, 
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


const Appbar = ({ detailsRef, mapRef, rsvpRef }) => {

  const [ currentOffset, setCurrentOffset ] = useState(window.pageYOffset);
  const [ isScrolledDown, setIsScrolledDown ] = useState("top");

  window.onscroll = () => {
    if(window.pageYOffset < 250) {
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
        <Box sx={{mt: 4, mb: {xs: 2.5, sm:2, md: 2.5}, userSelect: "none"}}>
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box>
              <Image src={headerImg} alt="MARK & GAEA" fit="scale-down" duration={800} sx={{maxHeight: {xs: 145, sm: 155, md: 160, lg: 160}, pointerEvents: "none"}}/>
            </Box>
          </Box>
          <Fade
            in={true}
            style={{ transitionDelay: "350ms"  }}
            timeout={900}
          >
            <Box sx={{display: "flex", justifyContent: "center", mt: {xs: 1.5, sm: 1.25}}}>
              <Typography sx={{fontSize: 12, letterSpacing: 6, opacity: .4, px: 1.5}}>-</Typography>
              <Typography sx={{fontSize: 13, letterSpacing: 6, opacity: .7}}>12</Typography>
              <Typography sx={{fontSize: 12, letterSpacing: 6, opacity: .6, transform: "translateY(-15%)", px: 1}}>.</Typography>
              <Typography sx={{fontSize: 13, letterSpacing: 6, opacity: .7}}>22</Typography>
              <Typography sx={{fontSize: 12, letterSpacing: 6, opacity: .6, transform: "translateY(-15%)", px: 1}}>.</Typography>
              <Typography sx={{fontSize: 13, letterSpacing: 6, opacity: .7}}>23</Typography>
              <Typography sx={{fontSize: 12, letterSpacing: 6, opacity: .4, px: 1.5}}>-</Typography>
            </Box>
          </Fade>
        </Box>
      </Container>
      <Box 
        sx={{position: "sticky", top: 0, zIndex: 20, py: 2, boxShadow: 0}} 
        className={`navbar ${isScrolledDown === "top" ? "page-top" : isScrolledDown ? "scroll-down" : "scroll-up"}`} 
      >
        <Container>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <Fade
            in={true}
            style={{ transitionDelay: "500ms"  }}
            timeout={1200}
          >
            <Box>
              <Link sx={linkStyles} onClick={() => window.scrollTo({top:0, left:0, behavior: "smooth"})} component={ReactLink}>The Wedding</Link>
            </Box>
          </Fade>
          <Fade
            in={true}
            style={{ transitionDelay: "700ms"  }}
            timeout={1200}
          >
            <Box>
              <Link sx={linkStyles} onClick={() => detailsRef.current.scrollIntoView({behavior:"smooth", block: "start", inline:"start"})} component={ReactLink}>Details</Link>
            </Box>
          </Fade>
          <Fade
            in={true}
            style={{ transitionDelay: "900ms"  }}
            timeout={1200}
          >
            <Box>
              <Link sx={linkStyles} onClick={() => mapRef.current.scrollIntoView({behavior:"smooth", block: "start", inline:"start"})} component={ReactLink}>Map</Link>
            </Box>
          </Fade>
          <Fade
            in={true}
            style={{ transitionDelay: "1100ms"  }}
            timeout={1200}
          >
            <Box>
              <Link sx={linkStyles} onClick={() => rsvpRef.current.scrollIntoView({behavior:"smooth", block: "start", inline:"start"})} component={ReactLink}>Rsvp</Link>
            </Box>
          </Fade>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Appbar