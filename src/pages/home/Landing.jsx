import React from 'react'
import { Link as ReactLink } from 'react-router-dom';
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import Image from 'mui-image'
import image2 from "../../assets/images/webp/image2_wide.webp"

const linkStyles = {
  textDecoration: "none",
  color: "text.primary",
  fontSize: 20,
  letterSpacing: 2, 
  fontFamily: "Bodoni-Bold",
  opacity: .75
}


const Landing = () => {
  return (
    // <Container>
      <Box sx={{maxWidth: "98vw", mx: "auto", mt: 20, position: "relative"}}>
        {/* <Box sx={{position: "absolute", top: "5%", zIndex: 10, width: "100%", py: 5, mixBlendMode: "hard-light", textShadow: "-1px -1px 3px rgba(255,255,255,.5), 2px 2px 4px #1b1b1b"}}>
          <Typography sx={{textAlign: "center", fontSize: {xl: 22}, letterSpacing: 2, transform: "skewX(-12deg)", opacity: .8, lineHeight: 1.35 }}>
            <Box component="span" sx={{display: "block"}}>
              I am not just me;
            </Box>
            <Box component="span" sx={{display: "block"}}>
              I am you and you are me--
            </Box>
            <Box component="span" sx={{display: "block"}}>
              We are. Hereafter.
            </Box>
          </Typography>
        </Box> */}
        <Box>
          <Image src={image2} sx={{filter: "grayscale(15%) opacity(.9)"}}/>
        </Box>
      </Box>
    // </Container>
  )
}

export default Landing