import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import image_1 from "../../assets/images/home_1.jpg"
import Image from 'mui-image';

const SecondLanding = () => {
  return (
    <Box sx={{height: "100vh", display: "flex", position: "relative", opacity: .8}}>
      <Box sx={{position: "absolute", zIndex: -1, background: "rgba(197,197,197,1)", height: "100vh", width: "100%", top:0, left: 0}}></Box>
      <Box sx={{position: "absolute", bottom: 0, }}>
        <Image src={image_1} duration={0} height="70vh" fit="scale-down" width="auto"/>
      </Box>
    </Box>
  )
}

export default SecondLanding