import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import image_1 from "../../assets/images/home_1.jpg"
import Image from 'mui-image';

const SecondLanding = () => {
  return (
    <Box sx={{height: "100vh", display: "flex", position: "relative", opacity: .8}}>
      <Box 
        sx={{
          position: "absolute", 
          zIndex: -1, 
          background: "rgba(197,197,197,1)", 
          // background: "-webkit-linear-gradient(to bottom, #314755, rgba(197,197,197,1))", /* Chrome 10-25, Safari 5.1-6 */
          background: "linear-gradient(0deg, rgba(197,197,197,1) 75%, rgba(241,233,231,1) 100%)",
          height: "100vh", 
          width: "100%", 
          top:0, 
          left: 0
        }}></Box>
      <Box sx={{position: "absolute", bottom: 0, display:"flex", alignItems: "center", width: "100%", left: 0, justifyContent: "center"}}>
        <Image src={image_1} duration={1500} height="50vh" fit="scale-down" width="auto"/>
      </Box>
      <Box item xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
        <Typography sx={{textAlign: "center", fontSize: {xl: 22}, letterSpacing: 2, transform: "skewX(-12deg)", opacity: 1, lineHeight: 1.35 }}>
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
      </Box>
    </Box>
  )
}

export default SecondLanding